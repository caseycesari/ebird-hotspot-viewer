import React, { Component, PropTypes } from 'react';

const propTypes = {
    locID: PropTypes.string,
    locName: PropTypes.string,
};

export default class Hotspot extends Component {
    render() {
        return (
            <li className="list-group-item">
                <span>{this.props.locName}</span>
            </li>
        );
    }
}

Hotspot.propTypes = propTypes;
