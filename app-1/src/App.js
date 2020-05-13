import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  textInput(value) {
    this.setState({
      message: value
    })
  }

  render() {
    return (
      <div className="Write">

        <input onChange={event => this.textInput(event.target.value)} />

        <p>{this.state.message}</p>

      </div>
    )
  }




}

export default App;
