import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      password: '',
      username: ''
    }
    // this.clickInput = this.clickInput.bind(this)
  }

  userInput(value) {
    this.setState({
      username: value
    })
  }

  passInput(value) {
    this.setState({
      password: value
    })
  }

  clickInput = () => {
    alert(`username: ${this.state.username} password: ${this.state.password}`)
  }

  render() {

    return (

      <div className="App">

        <input onChange={event => this.userInput(event.target.value)} />
        <input onChange={event => this.passInput(event.target.value)} />
        <button onClick={this.clickInput}>Login</button>



      </div>


    )

  }



}

export default App;
