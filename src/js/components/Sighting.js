import React, { Component, PropTypes } from 'react';

const propTypes = {
    comName: PropTypes.string,
    howMany: PropTypes.number,
};

export default class Sighting extends Component {
    render() {
        return (
            <li className="list-group-item">
                <span>{this.props.comName}, {this.props.howMany}</span>
            </li>
        );
    }
}

Sighting.propTypes = propTypes;
