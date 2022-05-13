import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import { Actions } from '../actions/Actions';
import { Store } from '../stores/Store';
import Hotspot from './Hotspot.js';
import Loading from './Loading.js';
import { BASE_API_URL, EBIRD_API_KEY } from '../constants/Constants';

function getState() {
    return {
        hotspots: Store.getHotspotList(),
        location: Store.getLocation(),
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

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this.onChange);

        if ((this.state.location.lat && this.state.location.lng) &&
            (!this.state.hotspots || this.state.hotspots.length === 0)) {
            const lat = this.state.location.lat;
            const lng = this.state.location.lng;
            const url = `${BASE_API_URL}ref/hotspot/geo?` +
                  `dist=${10}&back=${14}&lat=${lat}&lng=${lng}&fmt=json`;

            $.ajax({
                url,
                dataType: 'json',
                headers: {
                    'X-eBirdApiToken': EBIRD_API_KEY,
                },
                cache: false,
                success: data => {
                    Actions.setHotspotList(data);
                },
                error: (xhr, status, err) => {
                    window.console.error(status, err.toString());
                },
            });
        }
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    render() {
        let content = <Loading message={'Loading nearby hotspots...'} />;

        if (this.state.hotspots && this.state.hotspots.length !== 0) {
            content = this.state.hotspots.map(h =>
              <Hotspot
                key={h.locId}
                hotspotId={h.locId}
                locName={h.locName}
              />
            );
        }

        return (
          <div>
            <h3>Nearby hotspots</h3>
            <ul className="list-group">{content}</ul>
          </div>
        );
    }
}

HotspotList.propTypes = propTypes;
