import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import { Actions } from '../actions/Actions';
import { Store } from '../stores/Store';
import Sighting from './Sighting.js';
import Loading from './Loading';
import Map from './Map';

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
        let content = <Loading message={'Fetching recent observations...'} />;
        let title = '';

        if (this.state.sightings) {
            title = this.state.sightings[0].locName;
            let sightings = this.state.sightings.map(s =>
              <Sighting
                key={Math.random()}
                obsDt={s.obsDt}
                comName={s.comName}
                howMany={s.howMany}
              />
            );
            const position = [
                this.state.sightings[0].lng,
                this.state.sightings[0].lat,
            ];

            content = (
              <div>
                <div className="map-container">
                  <Map position={position} />
                </div>
                <table className="table table-hover table-responsive">
                  <tbody>
                    <tr>
                      <th>Date</th>
                      <th>Species</th>
                      <th>Count</th>
                    </tr>
                    {sightings}
                  </tbody>
                </table>
              </div>
            );
        } else if (this.state.sightings && this.state.sightings.length === 0) {
            content = <em>No recent sightings</em>;
        }

        return (
          <div>
            <Link to="/hotspots" onClick={this.setHotspotId}>&larr; Back to hotspot list</Link>
            <h3>{title}</h3>
            <h5>
              <a href={`http://ebird.org/ebird/hotspot/${this.props.params.hotspotId}`} target="_blank">
                View on eBird
              </a>
            </h5>
            {content}
          </div>
        );
    }
}

SightingsList.propTypes = propTypes;
