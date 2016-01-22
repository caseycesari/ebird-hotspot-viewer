import React, { Component, PropTypes } from 'react';
import Sighting from './Sighting.js';

const propTypes = {
  data: PropTypes.array,
};

export default class SightingsList extends Component {
  render() {
    const sightings = this.props.data.map(s => {
      return (
        <Sighting comName={s.comName} howMany={s.howMany} />
      );
    });

    return (
      <div className="sightings-list">
        Sightings list
        {sightings}
      </div>
    );
  }
}

SightingsList.propTypes = propTypes;
