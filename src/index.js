import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/app';
import Question1 from './components/question'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route to="/question1" exact component={Question1} />
      <Route  to="/" exact component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);