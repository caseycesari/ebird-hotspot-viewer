import React from 'react';
import { Link } from 'react-router';

export default function App() {
    return (
      <Link
        to="/hotspots"
        type="button"
        className="btn btn-primary"
      >
        View nearby hotspots
      </Link>
    );
}
