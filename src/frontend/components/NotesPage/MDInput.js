import React from 'react';

const MDInput = () => {
    return (
        <div id='md-input'>
            <form>
                <label htmlFor='note-title'>Note Title: </label>
                <input
                    id='note-title'
                    type='text'
                />
                <label htmlFor='note-text'>Text: </label>
                <textarea
                    id='note-text'
                />
            </form>

        </div>
    );
};

export default MDInput;
