import React from "react";
import PropTypes from 'prop-types';
import './styles.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardModal = (props) => {
  const {text, imgItems, eventName, eventDescription} = props;
  return (
    <div className="big">
      <Card className="Card">
        <CardImg
          top
          width="100%"
          {...imgItems}
        />
        <CardBody>
          <CardTitle style={{fontFamily:'Arial Narrow', fontWeight:'bold'}}>{eventName}</CardTitle>
          {/* <CardSubtitle>{eventDescription}</CardSubtitle> */}
          <CardText>
           {eventDescription}
          </CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};
CardModal.propTypes = {
  text: PropTypes.string,
  imgItems: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  eventName: PropTypes.string,
  eventDescription: PropTypes.string
};
CardModal.defaultProps = {
  text: '',
  eventName: '',
  eventDescription: '',
  imgItems: {
    src: '',
    alt: ''
  }
};
export default CardModal;
