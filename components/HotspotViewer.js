import React, { Component } from 'react';
import HotspotList from './HotspotList.js';
import Loading from './Loading.js';

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
        let content = <Loading message={'Loading nearby hotspots...'}/>;

        if (this.state.lat) {
            content = <HotspotList dist={10} lat={this.state.lat} lng={this.state.lng} />;
        }

        return (
            <div className="hotspot-list row">
                {content}
            </div>
        );
    }
}
