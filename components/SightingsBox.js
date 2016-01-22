import React, { Component, PropTypes } from 'react';
import SightingsList from './SightingsList.js';
import $ from 'jquery';

const propTypes = {
  url: PropTypes.string,
};

export default class SightingsBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url,
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
    return (
      <div className="sightings-box">
        Hello, world! I am a SightingsBox.
        <SightingsList data={this.state.data} />
      </div>
    );
  }
}

SightingsBox.propTypes = propTypes;
