import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Post = props => {
  const [focused, setFocued] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [label, setLabel] = useState("");
  const handleSubmit = event => {};
  useEffect(() => {
    setValue();
  }, []);
  return (
    <div>
      <input id="1234" type="text" value={value} />
    </div>
  );
};
Post.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};
Post.defaultProps = {
  id: "",
  type: ""
};

export default Post;
