import React, { Component, PropTypes } from 'react';

import mapboxgl from 'mapbox-gl';

export default class HotspotMap extends Component {
    componentDidMount() {
        mapboxgl.accessToken =
    'pk.eyJ1IjoiY2FzZXlwdCIsImEiOiJjaXA3OTUxODcwMHpic3ZseWtqcDZ1NXV2In0.felyQy7-DwS8zTiILhWf1g';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v9',
            center: this.props.position,
            zoom: 15,
        });

        map.on('load', () => {
            map.addSource('symbols', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: [
                            this.props.position[0],
                            this.props.position[1],
                        ],
                    },
                },
            });

            map.addLayer({
                id: 'symbols',
                type: 'symbol',
                source: 'symbols',
                layout: {
                    'icon-image': 'marker-15',
                },
            });
        });
    }

    render() {
        return <div id="map"></div>;
    }
}

HotspotMap.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};
