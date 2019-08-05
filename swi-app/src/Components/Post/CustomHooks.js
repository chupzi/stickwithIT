import { useState } from "react";

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
    post
  };
};
export default useSignUpForm;