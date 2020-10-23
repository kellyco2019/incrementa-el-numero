import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    
    this.state = {
      counter: 0
    };

    this.increaseValue = this.increaseValue.bind(this);
  }
    render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button onClick={this.increaseValue} id="inc">Incrementa</button>
      </div>
    )  
  }
    increaseValue() {
    this.setState({
      counter: 1
    });
  }
}
export default App;
