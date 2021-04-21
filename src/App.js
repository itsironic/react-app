import './App.css';
import Subject from './components/Subject';
import Navigation from './components/Navigation';
import Content from './components/Content';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", desc:"World Wide Web"},
      navigation:[
        {id:1, title:"HTML", desc:"HTML is Hyper Text Markup Language."},
        {id:2, title:"CSS", desc:"CSS is Cascading Style Sheets."},
        {id:3, title:"JavaScript", desc:"JavaScript is programming language that conforms to the ECMAScript specification."}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} 
          desc={this.state.subject.desc}/>
        <Navigation 
          data={this.state.navigation}/>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."/>
      </div>
    );
  }
}

export default App;
