import React, { Component } from 'react'

export default class NewTask extends Component {

  constructor() {

    super();

    this.state = {
      text: '',
    }

  }

  textInput = (value) => {
    console.log(value)
    this.setState({
      text: value
    })
  }


  render() {

    return (

      <div className='App'>

        <input
          value={this.state.text}
          placeholder='Enter Text Here'
          onChange={e => this.textInput(e.target.value)}
        />

        <button onClick={() => this.props.click(this.state.text)}>Add</button>



      </div>


    )


  }



}