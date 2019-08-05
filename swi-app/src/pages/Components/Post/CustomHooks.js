import React, { useState } from "react";

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const [change, setChange] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      setPost(change.Text);
    }
  };   
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
   setChange(inputs)
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
<<<<<<< HEAD:swi-app/src/Components/Post/CustomHooks.js
    // handleText,
=======
>>>>>>> 5f6ec9bd00df411b2b1aafaa0eef08c5c7a066b0:swi-app/src/pages/Components/Post/CustomHooks.js
    post
  };
};
export default useSignUpForm;