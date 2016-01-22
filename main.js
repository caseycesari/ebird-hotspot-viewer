import React from 'react';
import ReactDOM from 'react-dom';
import SightingsBox from './components/SightingsBox.js';

ReactDOM.render(
  <SightingsBox url={"http://ebird.org/ws1.1/data/obs/hotspot/recent?r=L504403&fmt=json"} />,
  document.getElementById('example')
);
