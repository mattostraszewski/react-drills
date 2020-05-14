import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {    why doesnt it need this?

  //   }
  // }

  render() {

    return (

      <div className='App'>

        <Image url={'https://skydiveperris.com/b/wp-content/uploads/2018/08/angle-flying-coach.jpg'} />


      </div>

    )

  }


}

export default App;
