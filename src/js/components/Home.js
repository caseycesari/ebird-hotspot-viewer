import React from 'react';
import { Link } from 'react-router';

export default function App() {
    return (
      <div className="jumbotron">
        <h1>eBird Hotspot Viewer</h1>
        <p>View observations from the last two weeks at nearby hotspots</p>
        <p>
          <Link
            to="/hotspots"
            type="button"
            className="btn btn-primary"
          >
            View nearby hotspots
          </Link>
        </p>
      </div>
    );
}
