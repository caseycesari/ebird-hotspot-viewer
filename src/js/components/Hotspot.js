import React, { Component, PropTypes } from 'react';

const propTypes = {
    locID: PropTypes.string,
    locName: PropTypes.string,
    selectHotspot: PropTypes.func,
};

export default class Hotspot extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.selectHotspot(this.props.locID);
    }

    render() {
        return (
            <li className="list-group-item">
                <a href="#" onClick={this.handleClick}>{this.props.locName}</a>
            </li>
        );
    }
}

Hotspot.propTypes = propTypes;
