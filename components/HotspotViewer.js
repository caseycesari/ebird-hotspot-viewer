import React, { Component } from 'react';
import HotspotList from './HotspotList.js';

export default class HotspotViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: undefined,
            lng: undefined,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            });
        }, err => {
            console.log(err);
        });
    }

    render() {
        let content = <div>Fetching nearby hotspots...</div>;
        if (this.state.lat) {
            content = <HotspotList lat={this.state.lat} lng={this.state.lng} />;
        }

        return (
            <div className="hotspot-list row">
                {content}
            </div>
        );
    }
}
