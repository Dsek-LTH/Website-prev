import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Top">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
