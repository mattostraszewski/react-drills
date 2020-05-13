import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      skydivesDisciplines: ['CRW', 'Freefly', 'Wingsuit', 'XRW', 'Belly', 'Tracking', 'Swooping'],
      userInput: '',

    }
  }

  textInput(value) {
    this.setState({
      userInput: value
    })
  }


  render() {
    const displayDisciplines = this.state.skydivesDisciplines
      .filter((element) => {
        return element.includes(this.state.userInput);
      })
      .map((el, ind) => {
        return <h2 key={ind}>{el}</h2>
      })

    return (
      <div className='App'>

        <input onChange={event => this.textInput(event.target.value)} />

        <div>{displayDisciplines}</div>

      </div>
    )
  }

}

export default App;
