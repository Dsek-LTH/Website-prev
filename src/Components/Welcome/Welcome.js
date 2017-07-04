import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

/**
 * Parent component for the landing page
 */
class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Link to="/new-member">
          <div className="column">
            <div className="background newStudents" />
          </div>
        </Link>
        <Link to="/login">
          <div className="column">
            <div className="background guild" />
          </div>
        </Link>
        <Link to="/company-contact">
          <div className="column">
            <div className="background company" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Welcome;
