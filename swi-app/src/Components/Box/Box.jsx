import React from "react";
import PropTypes from 'prop-types';
import {
    Card,
    CardTitle,
  } from "reactstrap";

const Box = (props) => {

  const {text} = props;
  return (
    <div class="box">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' } }>
            <CardTitle>{props.text}</CardTitle>
        </Card>
    </div>
  );
};
Box.propTypes = {
    text: PropTypes.string
};
Box.defaultProps = {
    text: 'DATE'
};
export default Box;
