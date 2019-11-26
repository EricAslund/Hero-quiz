import React from 'react';
import ReactDOM from 'react-dom';
import Game from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import './style.css'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Game';
import Result from './pages/Result';
const routing = (
  <Router>
    <div>
    
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>
    
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/result" component={Result} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
