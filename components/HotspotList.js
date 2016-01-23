import React, { Component, PropTypes } from 'react';
import Hotspot from './Hotspot.js';
import $ from 'jquery';

const propTypes = {
    url: PropTypes.string,
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
                url: `http://ebird.org/ws1.1/ref/hotspot/geo?lat=${this.props.lat}&lng=${this.props.lng}&fmt=json`,
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

    render() {
        let content = <div>Fetching recent sightings...</div>;

        if (this.state.hotspots) {
            const hotspots = this.state.hotspots.map(h => {
                return (
                    <Hotspot key={h.locID} locID={h.locID} locName={h.locName} />
                );
            });

            content = <ul className="list-group">{hotspots}</ul>;
        }

        return (
            <div>
                <strong>Nearby hotspots</strong>
                {content}
            </div>
        );
    }
}

HotspotList.propTypes = propTypes;
