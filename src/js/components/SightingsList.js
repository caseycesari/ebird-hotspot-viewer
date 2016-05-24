import React, { Component, PropTypes } from 'react';
import Sighting from './Sighting.js';
import { Actions } from '../actions/Actions';
import { Link } from 'react-router';

import { Store } from '../stores/Store';
import $ from 'jquery';

function getState() {
    return {
        sightings: Store.getSightingsList(),
    };
}

const propTypes = {
    params: PropTypes.object,
};

export default class SightingsList extends Component {
    constructor() {
        super();

        this.state = {
            sightings: undefined,
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange);

        $.ajax({
            url: `http://ebird.org/ws1.1/data/obs/hotspot/recent?r=${this.props.params.hotspotId}&fmt=json`,
            dataType: 'json',
            cache: false,
            success: data => {
                Actions.setSightingsList(data);
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            },
        });
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    setHotspotId() {
        Actions.setHotspotId(undefined);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        let content = '';
        if (this.state.sightings) {
            content = this.state.sightings.map(s => {
                return (
                    <Sighting key={Math.random()} comName={s.comName} howMany={s.howMany} />
                );
            });
        }

        return (
            <div>
                <Link to="/hotspots" onClick={this.setHotspotId}>&larr; Back to hotspot list</Link>
                <div>
                    <strong>{this.props.params.hotspotId}</strong>
                </div>
                {content}
            </div>
        );
    }
}

SightingsList.propTypes = propTypes;
