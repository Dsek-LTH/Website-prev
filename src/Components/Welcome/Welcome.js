import React, { Component } from 'react';
import './Welcome.css';

/**
 * Parent component for the landing page
 */
class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="column">
          <div className="background newStudents" />
        </div>
        <div className="column">
          <div className="background guild" />
        </div>
        <div className="column">
          <div className="background company" />
        </div>
      </div>
    );
  }
}

export default Welcome;
