import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      skydivesDisciplines: ['CRW', 'Freefly', 'Wingsuit', 'XRW', 'Belly', 'Tracking', 'Swooping']
    }
  }

  render() {
    const displayDisciplines = this.state.skydivesDisciplines.map((el, ind) => {
      return <h2 key={ind}>{el}</h2>
    })

    return (
      <div className='App'>{displayDisciplines}</div>
    )
  }

}

export default App;
