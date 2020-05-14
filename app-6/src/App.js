import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: ''
    }
  }
  textInput = (value) => {
    console.log(value)
    this.setState({
      text: value
    })
  }
  addToArray = () => {
    this.setState({
      list: [...this.state.list, this.state.text], //dont know what this line of code is doing.
      text: ''
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
          value={this.state.text} //need explanation please.
          placeholder='Enter new task'
          onChange={e => this.textInput(e.target.value)}
        />
        <button onClick={this.addToArray}>Add</button>
        <div>{list}</div>
      </div>
    )
  }
}
