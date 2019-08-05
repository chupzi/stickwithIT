import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSignUpForm from './CustomHooks';

const Post = (props) => {
    const {id, type, imgSrc} = props;
    const {inputs, handleInputChange, handleSubmit, post} = useSignUpForm({text:''});

  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <label className="label"> What events are you hitting up next? </label>
        <input type="text" name="Text" onChange={handleInputChange} value={inputs.text}/>
        <button tpye="submit"> Post </button>
      </form> 
      <div className="media">
        <img className="profile-image" src={imgSrc}/>
        <div className="media-body">
          <h4>Content Header</h4>
          <p>{post}</p>
        </div>
      </div>
      <hr className="horizontal"/>
    
    </div>
    
  );
};
Post.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  imgSrc: PropTypes.string
};
Post.defaultProps = {
  id: "",
  type: "",
  imgSrc: 'https://image.flaticon.com/icons/png/512/64/64572.png'
};

export default Post;
