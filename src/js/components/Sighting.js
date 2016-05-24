import React, { PropTypes } from 'react';

const propTypes = {
    comName: PropTypes.string,
    howMany: PropTypes.number,
};

export default function Sighting(props) {
    return (
      <li className="list-group-item">
        <span>{props.comName}, {props.howMany}</span>
      </li>
    );
}

Sighting.propTypes = propTypes;
