import React from 'react';
import PropTypes from 'prop-types';

const OldPost = (props) => {
    const {imgSrc, header, body} = props;
    return (
    <div className="media">
        <img className="profile-image" src={imgSrc}/>
        <div className="media-body">
            <h4>{header}</h4>
            <p>{body}</p>
        </div>
    </div>
    )
}

OldPost.propTypes = {
    imgSrc: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string

}
OldPost.defaultProps = {
    imgSrc: '',
    header: '',
    body: ''
}
export default OldPost;