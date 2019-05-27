import React from 'react';
import PropTypes from 'prop-types';

const NewNote = (props) => {
    // console.log('props.match: ', props.match);
    return (
        <div id='new-note'>
            <h1>Make a new note!</h1>
            <p>Or click one on the side</p>
        </div>
    );
};

export default NewNote;
