import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../adapters';

const MDInput = (props) => {
    const { params } = props.match;
    const [currentNote, setCurrentNote] = useState({
        title: '',
        text: '',
    });

    const handleChange = (e) => {
        setCurrentNote({ [e.target.name]: e.target.value });
    };

    useEffect(() => {
        NoteAdapter.getOne(params.noteId)
            .then((note) => {
                if (note) setCurrentNote({ title: note.title, text: note.text });
                // TODO handle missing note redirect properly
            });
    }, [params]);


    return (
        <div id='md-input'>
            <form>
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
            </form>

        </div>
    );
};

MDInput.propTypes = {
    match: PropTypes.object,
};

export default MDInput;
