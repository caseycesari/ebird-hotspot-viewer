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

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this.onChange);

        $.ajax({
            url: `http://ebird.org/ws1.1/data/obs/hotspot/recent?r=${this.props.params.hotspotId}&fmt=json`,
            dataType: 'json',
            cache: false,
            success: data => {
                Actions.setSightingsList(data);
            },
            error: (xhr, status, err) => {
                window.console.error(status, err.toString());
            },
        });
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    setHotspotId() {
        Actions.setHotspotId(undefined);
    }


    render() {
        let content = '';
        if (this.state.sightings) {
            content = this.state.sightings.map(s =>
              <Sighting key={Math.random()} comName={s.comName} howMany={s.howMany} />
            );
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
