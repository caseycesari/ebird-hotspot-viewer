import React, { Component, PropTypes } from 'react';
import Sighting from './Sighting.js';
import $ from 'jquery';

const propTypes = {
    data: PropTypes.array,
};

export default class SightingsList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        $.ajax({
            url: `http://ebird.org/ws1.1/data/obs/hotspot/recent?r=${this.props.locId}&fmt=json`,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            },
        });
    }

    render() {
        const sightings = this.state.data.map(s => {
            return (
                <Sighting comName={s.comName} howMany={s.howMany} />
            );
        });

        return (
            <div>
                {sightings}
            </div>
        );
    }
}

SightingsList.propTypes = propTypes;
