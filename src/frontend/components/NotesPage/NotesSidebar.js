import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserNoteTitles from './UserNoteTitles';
import VideoNoteTitles from './VideoNoteTitles';

const NotesPage = (props) => {
    return (
        <div id='notes-sidebar'>
            <h1>NOTES SIDEBAR</h1>
            <Link to={props.match.url}><button>Notes Home</button></Link>
            <UserNoteTitles />
            <VideoNoteTitles />
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
