import React, { Component, PropTypes } from 'react';

const propTypes = {
    message: PropTypes.string,
};

export default class Loading extends Component {
    render() {
        return (
            <div>
                <strong>{this.props.message}</strong>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                    </div>
                </div>
            </div>
        );
    }
}

Loading.propTypes = propTypes;
