import React from 'react';
import ReactDOM from 'react-dom';
import HotspotViewer from './components/HotspotViewer.js';
import SightingsList from './components/SightingsList.js';

import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/hotspots" component={HotspotViewer} />
    <Route path="/hotspot/:hotspotId" component={SightingsList} />
  </Router>
 ), document.getElementById('app'));
