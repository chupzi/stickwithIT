import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSignUpForm from './CustomHooks.js';


const Post = (props) => {
    const {id, type, imgSrc} = props;
    const {inputs, handleInputChange, handleSubmit, post} = useSignUpForm({text:''});

  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <label className="label">  </label>
        <input height="100" maxlength="100" size="100" type="text" name="Text" onChange={handleInputChange} value={inputs.text}/>
        <button tpye="submit"> Post </button>
      </form> 
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
  imgSrc: 'https://media.licdn.com/dms/image/C4D03AQGcTN26EHo7Qg/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=Th2Txn8sHqW7nwVBWtXDFjvvimOycznRwkYITKmHD1M'
  
};

export default Post;
