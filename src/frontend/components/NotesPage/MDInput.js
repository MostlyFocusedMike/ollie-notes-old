import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../adapters';
import appContext from '../../context';
import MDInputForm from './MDInputForm';

const MDInput = (props) => {
    const { params } = props.match;
    const [currentNote, setCurrentNote] = useState({
        id: 0,
        title: '',
        text: '',
    });
    const [isNoteTitleNew, setIsNoteTitleNew] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const context = useContext(appContext);

    const handleChange = (e) => {
        setCurrentNote({
            ...currentNote,
            [e.target.name]: e.target.value,
        });
    };

    // initial load and all page changes
    useEffect(() => {
        NoteAdapter.getOne(params.noteId)
            .then((note) => {
                if (note) setCurrentNote({ id: note.id, title: note.title, text: note.text });
                // TODO handle missing note redirect properly
            });
    }, [params]);

    // update state when title changes
    useEffect(() => {
        if (!isNoteTitleNew) setIsNoteTitleNew(true);
    }, [currentNote.title]);

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
            })
            .then(() => {
                if (isNoteTitleNew) {
                    context.setRefreshTitles(true);
                    setIsNoteTitleNew(false);
                }
            });
    };

    return (
        <div id='md-input'>
            <MDInputForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                currentNote={currentNote}
                alertVisible={alertVisible}
                handleShowAlert={handleShowAlert}
            />
        </div>
    );
};

MDInput.propTypes = {
    match: PropTypes.object,
};

export default MDInput;
