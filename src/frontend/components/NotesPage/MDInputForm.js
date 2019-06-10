import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const MDInput = (props) => {
    const {
        handleSubmit,
        handleChange,
        currentNote,
        alertVisible,
    } = props;

    return (
        <form
            onSubmit={handleSubmit}
        >
            <label htmlFor='note-title'>Note Title: </label>
            <input
                id='note-title'
                name='title'
                type='text'
                value={currentNote.title}
                onChange={handleChange}
            />
            <label htmlFor='note-text'>Text: </label>
            <textarea
                id='note-text'
                name='text'
                value={currentNote.text}
                onChange={handleChange}
            />
            <input type='submit' value='Save'/>
            {
                alertVisible
                    ? <div id='save-alert'><p>Saved!</p></div>
                    : ''
            }
        </form>
    );
};

MDInput.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    currentNote: PropTypes.object,
    alertVisible: PropTypes.bool,
};

export default MDInput;