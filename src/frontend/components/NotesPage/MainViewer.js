import React from 'react';
import MDInput from './MDInput';
import ExtensionViewer from './ExtensionViewer';

const MainViewer = () => {
    return (
        <div id='main-viewer'>
            <MDInput />
            <ExtensionViewer />
        </div>
    );
};

export default MainViewer;
