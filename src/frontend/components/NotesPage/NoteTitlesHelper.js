import React from 'react';
import PropTypes from 'prop-types';

const NoteTitlesList = (props) => {
    return (
        <ul>
            {
                props.userNoteTitles.map((obj, idx) => {
                    return <li key={`${obj.title}-${idx}`}>{obj.title}</li>;
                })
            }
        </ul>
    );
};

NoteTitlesList.propTypes = {
    userNoteTitles: PropTypes.array,
};

export default NoteTitlesList;
