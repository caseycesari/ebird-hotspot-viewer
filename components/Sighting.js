import React, { Component, PropTypes } from 'react';

const propTypes = {
  comName: PropTypes.string,
  howMany: PropTypes.number,
};

export default class Sighting extends Component {
  render() {
    return (
      <div className="sighting">
        <span>{this.props.comName}, {this.props.howMany}</span>
      </div>
    );
  }
}

Sighting.propTypes = propTypes;
