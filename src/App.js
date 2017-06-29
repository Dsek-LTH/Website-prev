import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img alt="img_logo" style={styles.logo} src={logo} />
      </div>
    );
  }
}

const styles = {
  logo: {
    height: 200,
    width: 200
  }
}

export default App;
