import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
    hotspotId: PropTypes.string,
    locName: PropTypes.string,
};

export default class Hotspot extends Component {
    render() {
        return (
            <li className="list-group-item">
                <Link to={`hotspot/${this.props.hotspotId}`}>
                    {this.props.locName}
                </Link>
            </li>
        );
    }
}

Hotspot.propTypes = propTypes;
