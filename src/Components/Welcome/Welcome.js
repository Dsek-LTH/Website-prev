import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import urls from './../../urls';
import './Welcome.css';

/**
 * Parent component for the landing page
 */
class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Link to={urls.newMember}>
          <div className="column">
            <div className="background newStudents" />
          </div>
        </Link>
        <Link to={urls.login}>
          <div className="column">
            <div className="background guild" />
          </div>
        </Link>
        <Link to={urls.companyContact}>
          <div className="column">
            <div className="background company" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Welcome;
