import React from "react";
import PropTypes from 'prop-types';

import {
    Media
} from "reactstrap";

const MediaHolder = (props) => {

    const { text, body, heading } = props;
    return (
        <div class="mediaHolder">
            <Media>
                <Media left href="#">
                    <Media object data-src="holder.js/64x64" alt="placeholder img" />
                </Media>
                <Media body>
                    <Media heading>
                        Media heading
                </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>
        </div>
    );
};
Media.propTypes = {
    text: PropTypes.string,
    body: PropTypes.bool,
    heading: PropTypes.bool,
    left: PropTypes.bool
};
Media.defaultProps = {
    text: 'DATE',
};
export default MediaHolder;
