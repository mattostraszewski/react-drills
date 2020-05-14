import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'
import NewTask from './NewTask.js'
import List from './List.js'

class App extends Component {

  constructor() {

    super();

    this.state = {
      list: []
    }

  }



  addToArray = (value) => {
    // console.log(this.state.value)
    // console.log(value)
    this.setState({
      list: [...this.state.list, value]
    })
  }


  render() {


    return (

      <div className='App'>

        <h1>My to-do list:</h1>

        <NewTask click={this.addToArray} />

        <List fuck={this.state.list} />

      </div>


    )


  }


}

export default App;
