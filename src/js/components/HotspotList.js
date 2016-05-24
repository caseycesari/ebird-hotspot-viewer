import React, { Component, PropTypes } from 'react';
import Hotspot from './Hotspot.js';
import { Actions } from '../actions/Actions';

import { Store } from '../stores/Store';
import $ from 'jquery';

function getState() {
    return {
        hotspots: Store.getHotspotList(),
    };
}

const propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    dist: PropTypes.number,
};

export default class HotspotList extends Component {
    constructor() {
        super();

        this.state = getState();

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange);

        if ((this.props.lat && this.props.lng) &&
            (!this.state.hotspots || this.state.hotspots.length === 0)) {
            $.ajax({
                url: `http://ebird.org/ws1.1/ref/hotspot/geo?dist=${this.props.dist}&lat=${this.props.lat}&lng=${this.props.lng}&fmt=json`,
                dataType: 'json',
                cache: false,
                success: data => {
                    Actions.setHotspotList(data);
                },
                error: (xhr, status, err) => {
                    console.error(status, err.toString());
                },
            });
        }
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        let content;

        if (this.state.hotspots) {
            content = this.state.hotspots.map(h => {
                return (
                    <Hotspot
                      key={h.locID}
                      hotspotId={h.locID}
                      locName={h.locName}
                    />
                );
            });
        }

        return (
            <div>
                <ul className="list-group">{content}</ul>
            </div>
        );
    }
}

HotspotList.propTypes = propTypes;
