import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import urls from './urls';
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

            <CSSTransitionGroup
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionName="fade"
            >
              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Welcome} />
                <Route path={urls.newMember} render={() => <div>New Member</div>} />
                <Route path={urls.login} render={() => <div>Login</div>} />
                <Route path={urls.companyContact} render={() => <div>Company Contact</div>} />
              </Switch>
            </CSSTransitionGroup>

          )} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
