import React, { Component } from 'react';
import HotspotList from './HotspotList.js';
import Loading from './Loading.js';

import { Actions } from '../actions/Actions';
import { Store } from '../stores/Store';

function getState() {
    return {
        location: Store.getLocation(),
    };
}

export default class HotspotViewer extends Component {
    constructor() {
        super();

        this.state = getState();

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange);

        if (!this.state.location) {
            navigator.geolocation.getCurrentPosition(pos => {
                Actions.setLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            }, err => {
                console.log(err);
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
        let content = <Loading message={'Loading nearby hotspots...'}/>;

        if (this.state.location || this.state.hotspotId) {
            content = (
                <HotspotList
                  hotspotId={this.state.hotspotId}
                  hotspots={this.state.hotspots}
                  sightings={this.state.sightings}
                  dist={10}
                  lat={this.state.location.lat}
                  lng={this.state.location.lng}
                />
            );
        }

        return (
            <div className="hotspot-list row">
                {content}
            </div>
        );
    }
}
