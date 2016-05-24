import React, { PropTypes } from 'react';

const propTypes = {
    obsDt: PropTypes.string,
    comName: PropTypes.string,
    howMany: PropTypes.number,
};

export default function Sighting(props) {
    return (
      <tr>
        <td>{props.obsDt}</td>
        <td>{props.comName}</td>
        <td>{props.howMany}</td>
      </tr>
    );
}

Sighting.propTypes = propTypes;
