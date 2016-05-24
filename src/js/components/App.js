import React, { Component, PropTypes } from 'react';

import { Actions } from '../actions/Actions';
import { Store } from '../stores/Store';
import Header from './Header.js';
import Loading from './Loading.js';

const propTypes = {
    children: PropTypes.object,
};


function getState() {
    return {
        location: Store.getLocation(),
    };
}

export default class App extends Component {
    constructor() {
        super();

        this.state = getState();

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this.onChange);

        if (!this.state.location) {
            navigator.geolocation.getCurrentPosition(pos => {
                Actions.setLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            }, err => {
                window.console.error(err);
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
        let content = <Loading message={'Getting your location...'} />;

        if (this.state.location) {
            content = this.props.children;
        }

        return (
          <div>
            <Header />
            <h1>eBird Hotspot Viewer</h1>
            {content}
          </div>
        );
    }
}

App.propTypes = propTypes;
