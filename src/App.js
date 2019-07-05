import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/layout/Navbar';
import User from './Component/Users/User';
import Alert from './Component/layout/Alert';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import NotFound from './Component/pages/NotFound';
import './App.css';

import GithubState from './Context/github/GithubState';
import AlertState from './Context/alart/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
