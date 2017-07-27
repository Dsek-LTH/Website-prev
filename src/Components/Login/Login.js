import React, { Component } from 'react';
import './Login.css';

import TextField from './../TextField/TextField';
import Button from './../Button/Button';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <TextField type="text" placeholder="Username" />
        <TextField type="password" placeholder="Password" />
        <Button text="Login" />
      </div>
    );
  }
}

export default Login;
