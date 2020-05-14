import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      text: '',
      list: []
    }

  }


  textInput(value) {
    this.setState({
      text: value
    })
  }

  AddToArray = () => {
    this.setState({
      list: [...this.state.list, this.state.input], //dont know what this line of code is doing.
      input: ''
    })
  }


  render() {

    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;    //do not understand why this is needed.
    })

    return (

      <div className='App'>
        <h1>My to-do list:</h1>

        <input
          value={this.state.input} //need explanation please.
          placeholder='Enter new task'
          onChange={e => this.textInput(e.target.value)}
        />

        <button onClick={this.AddToArray}>Add</button>



      </div>

    )

  }
}
