import React from 'react';
import PropTypes from 'prop-types';

const VideoNoteTitles = (props) => {
    return (
        <div id='user-note-titles'>
            <h1>User Video Notes</h1>
            <ul>
                <li>Dummy note</li>
            </ul>
        </div>
    );
};

VideoNoteTitles.propTypes = {
    match: PropTypes.object,
};


export default VideoNoteTitles;
