import React, { useState } from 'react';

const MDInput = () => {
    const [currentNote, setCurrentNote] = useState({
        title: '',
        text: '',
    });

    const handleChange = (e) => {
        setCurrentNote({ [e.target.name]: e.target.value });
    };

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
