import React, { PropTypes } from 'react';

const propTypes = {
    message: PropTypes.string,
};

export default function Loading(props) {
    return (
      <div>
        <strong>{props.message}</strong>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped active"
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '100%' }}
          >
          </div>
        </div>
      </div>
    );
}

Loading.propTypes = propTypes;
