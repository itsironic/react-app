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
      selected_content_id:2,
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
      var i = 0;
      while(i < this.state.navigation.length){
        var data = this.state.navigation[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} 
          desc={this.state.subject.desc}
          onChangePage={function(){
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}  
        />
        <Navigation 
          data={this.state.navigation}
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
        />
        <Content 
          title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
