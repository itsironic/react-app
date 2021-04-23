import './App.css';
import Subject from './components/Subject';
import Navigation from './components/Navigation';
import Content from './components/Content';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject:{title:"WEB", desc:"World Wide Web"},
      welcome:{title:"Welcome", desc:"Hello, React!"},
      navigation:[
        {id:1, title:"HTML", desc:"HTML is Hyper Text Markup Language."},
        {id:2, title:"CSS", desc:"CSS is Cascading Style Sheets."},
        {id:3, title:"JavaScript", desc:"JavaScript is programming language that conforms to the ECMAScript specification."}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.navigation[0].title;
      _desc = this.state.navigation[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title} 
          desc={this.state.subject.desc}/> */}
        <header>
            <h1><a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault();
              this.setState({
                mode: 'welcome'
              });
            }
            .bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.desc}
        </header>
        <Navigation 
          data={this.state.navigation}/>
        <Content 
          title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
