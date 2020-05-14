import React, { Component } from 'react'
import Todo from './Todo.js'

export default class List extends Component {

  constructor() {

    super();

  }


  render() {
    const newArr = this.props.fuck.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return (

      <div>

        {newArr}

      </div>

    )


  }

}



