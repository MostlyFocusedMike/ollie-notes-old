import React from 'react';
import PropTypes from 'prop-types';
import MDInput from './MDInput';
import ExtensionViewer from './ExtensionViewer';

const MainViewer = (props) => {
    return (
        <div id='main-viewer'>
            <MDInput match={props.match} />
            <ExtensionViewer />
        </div>
    );
};

MainViewer.propTypes = {
    match: PropTypes.object,
};

export default MainViewer;
