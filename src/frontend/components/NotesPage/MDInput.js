import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../adapters';

const MDInput = (props) => {
    const { params } = props.match;
    const [currentNote, setCurrentNote] = useState({
        id: 0,
        title: '',
        text: '',
    });
    const [alertVisible, setAlertVisible] = useState(false);

    const handleChange = (e) => {
        setCurrentNote({
            ...currentNote,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        NoteAdapter.getOne(params.noteId)
            .then((note) => {
                if (note) setCurrentNote({ id: note.id, title: note.title, text: note.text });
                // TODO handle missing note redirect properly
            });
    }, [params]);

    const handleShowAlert = () => {
        setAlertVisible(true);

        setTimeout(() => {
            setAlertVisible(false);
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        NoteAdapter.update(currentNote)
            .then((note) => {
                handleShowAlert();
            });
    };

    return (
        <div id='md-input'>
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

        </div>
    );
};

MDInput.propTypes = {
    match: PropTypes.object,
};

export default MDInput;
