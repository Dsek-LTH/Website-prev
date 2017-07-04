import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';

import Welcome from './Components/Welcome/Welcome';

/**
 * Root component responsible for spawning children by routes
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route render={({ location }) => (

            <CSSTransitionGroup transitionName="fade">
              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Welcome} />
                <Route path="/new-member" render={() => <div>New Member</div>} />
                <Route path="/login" render={() => <div>Login</div>} />
                <Route path="/company-contact" render={() => <div>Company Contact</div>} />
              </Switch>
            </CSSTransitionGroup>

          )} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
