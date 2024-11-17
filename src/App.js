
import React, { Component } from 'react';
import Subject from './components/subject';
import Middle from './components/Middle';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id : 1,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText MarkUp Language' },
        { id: 2, title: 'CSS', desc: 'CSS is HyperText MarkUp Language' },
        { id: 3, title: 'JAVASCRIPT', desc: 'JavaScript is HyperText MarkUp Language' }
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];

        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            // if (this.state.mode === 'welcome') {
            //   return this.setState({ mode: 'read' });
            // } else if (this.state.mode === 'read') {
            //   return this.setState({ mode: 'welcome' });
            // }
            this.setState ({mode : 'welcome'});
          }.bind(this)}>
        </Subject>
        <Middle
          onChangePage={function (id) {
            this.setState({
              mode : 'read',
              selected_content_id : Number(id)
            });

          }.bind(this)} data={this.state.contents}
        ></Middle>
        <Footer title={_title} desc={_desc}></Footer>
      </div>
    );
  }
}

export default App;
