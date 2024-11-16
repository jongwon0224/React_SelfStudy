
import React, { Component } from 'react';
import Subject from './components/subject';
import Middle from './components/Middle';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : 'read',
      subject : {title:'WEB', sub:'World Wide Web!'},
      welcome : {title:'Welcome', desc:'Hello, React!!'},
      contents : [
        {id : 1, title : 'HTML', desc : 'HTML is HyperText MarkUp Language'},
        {id : 2, title : 'CSS', desc : 'CSS is HyperText MarkUp Language'},
        {id : 3, title : 'JAVASCRIPT', desc : 'JavaScript is HyperText MarkUp Language'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title= {this.state.subject.title}
          sub= {this.state.subject.sub}> 
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            alert('hi');
          }} >{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Middle data= {this.state.contents}></Middle>
        <Footer title={_title} desc={_desc}></Footer>
      </div>
    );
  }
}

export default App;
