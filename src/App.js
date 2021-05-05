import './App.css';
import Subject from './components/Subject';
import Navigation from './components/Navigation';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}/>
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
      _article = <ReadContent title={_title} desc={_desc}/>
    } else if(this.state.mode === 'create')
      _article = <CreateContent/>
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
        <Control
          onChangeMode={function(_mode){
            this.setState({
            mode: _mode,
            });
          }.bind(this)}
        />
        {_article}
      </div>
    );
  }
}

export default App;
