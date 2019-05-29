import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteTitlesList = (props) => {
    return (
        <ul>
            {
                props.userNoteTitles.map((obj, idx) => {
                    return (
                        <Link
                            to={`${props.match.url}/${obj.id}`}
                            key={`${obj.title}-${idx}`}
                        >
                            <li >{obj.title}</li>
                        </Link>
                    );
                })
            }
        </ul>
    );
};

NoteTitlesList.propTypes = {
    userNoteTitles: PropTypes.array,
    match: PropTypes.object,
};

export default NoteTitlesList;
