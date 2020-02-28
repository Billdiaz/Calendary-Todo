import React, { Component } from 'react';
import { render } from 'react-dom';
import Hola from './component/Hello';
import Test from './component/Test';
import './css/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hola name={this.state.name} />
        <Test mensaje= "Que tal??"></Test>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
