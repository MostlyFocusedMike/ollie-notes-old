import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../../adapters';

const MDInput = (props) => {
    console.log('props: ', props);

    const [currentNote, setCurrentNote] = useState({
        title: '',
        text: '',
    });

    const handleChange = (e) => {
        setCurrentNote({ [e.target.name]: e.target.value });
    };

    useEffect(() => {
        NoteAdapter.getOne(1)
            .then((note) => {
                if (note) setCurrentNote({ title: note.title, text: note.text });
                // TODO handle missing note redirect properly
            });
    }, []);


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

export default MDInput;
