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
    const [hasTitleChanged, setHasTitleChanged] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const context = useContext(appContext);

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
        if (!hasTitleChanged) setHasTitleChanged(true);
    }, [currentNote.title]);

    const showAlert = () => {
        setIsAlertVisible(true);
        setTimeout(() => setIsAlertVisible(false), 2000);
    };

    const updateTitlesIfNew = (shouldRefresh) => {
        if (shouldRefresh) {
            context.setRefreshTitles(true);
            setHasTitleChanged(false);
        }
    };

    const handleChange = (e) => {
        setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        NoteAdapter.update(currentNote)
            .then(() => showAlert())
            .then(() => updateTitlesIfNew(hasTitleChanged));
    };

    return (
        <div id='md-input'>
            <MDInputForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                currentNote={currentNote}
                isAlertVisible={isAlertVisible}
            />
        </div>
    );
};

MDInput.propTypes = {
    match: PropTypes.object,
};

export default MDInput;
