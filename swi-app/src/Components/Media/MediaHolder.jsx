import React from "react";
import PropTypes from 'prop-types';

import {
    Media
} from "reactstrap";

const MediaHolder = (props) => {

    const { text, body, heading, src } = props;
    return (
        <div class="mediaHolder">
            <Media>
                <Media left href="#">
                    <Media object data-src={'src'}/>
                </Media>
                <Media body>
                    <Media heading>
                        {heading}
                </Media>
                    {text}
                </Media>
            </Media>
        </div>
    );
};
Media.propTypes = {
    text: PropTypes.string,
    body: PropTypes.bool,
    heading: PropTypes.string,
    left: PropTypes.bool,
    src: PropTypes.string
};
Media.defaultProps = {
    text: 'DATE',
    header: 'header',
    src: ''
};
export default MediaHolder;
