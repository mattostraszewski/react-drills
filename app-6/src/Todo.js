import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return <p>{this.props.task}</p>; //where is task coming from
  }
}

export default Todo