import '../sass/app.scss';
import '../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';
import About from './components/About.js';
import HotspotList from './components/HotspotList.js';
import SightingsList from './components/SightingsList.js';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/hotspots" component={HotspotList} />
      <Route path="/hotspot/:hotspotId" component={SightingsList} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
 ), document.getElementById('app'));
