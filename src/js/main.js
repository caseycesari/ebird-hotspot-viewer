import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';
import HotspotList from './components/HotspotList.js';
import SightingsList from './components/SightingsList.js';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/hotspots" component={HotspotList} />
      <Route path="/hotspot/:hotspotId" component={SightingsList} />
    </Route>
  </Router>
 ), document.getElementById('app'));
