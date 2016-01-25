import React, { Component, PropTypes } from 'react';
import Hotspot from './Hotspot.js';
import $ from 'jquery';

const propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    dist: PropTypes.number,
};

export default class HotspotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotspots: [],
        };
    }

    componentDidMount() {
        if (this.props.lat && this.props.lng) {
            $.ajax({
                url: `http://ebird.org/ws1.1/ref/hotspot/geo?dist=
                      ${this.props.dist}&lat=${this.props.lat}&lng=${this.props.lng}&fmt=json`,
                dataType: 'json',
                cache: false,
                success: data => {
                    this.setState({ hotspots: data });
                },
                error: (xhr, status, err) => {
                    console.error(status, err.toString());
                },
            });
        }
    }

    selectHotspot(locID) {
        console.log(locID);
    }

    render() {
        const hotspots = this.state.hotspots.map(h => {
            return (
                <Hotspot
                    key={h.locID}
                    locID={h.locID}
                    locName={h.locName}
                    selectHotspot={this.selectHotspot}
                />
            );
        });

        return (
            <div>
                <ul className="list-group">{hotspots}</ul>;
            </div>
        );
    }
}

HotspotList.propTypes = propTypes;
