import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, Row, Col, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement } from '@babel/types';

const EventsPage = (props) => {
  return (
    <div style={{ marginTop: "3%" }}>
      <CardColumns>
        <Row>
          <Col sm="3"></Col>
          <Col sm="5">
            {/* <CardDeck> */}
            <Card body inverse color="dark" >
              <CardBody>
                <CardTitle>Date:</CardTitle>
                <CardSubtitle>May 27th, 2020</CardSubtitle>
                <CardText></CardText>
              </CardBody>
            </Card>
            <Card body inverse color="dark">
              <CardBody>
                <CardTitle> Location: </CardTitle>
                <CardSubtitle>New York City, New York</CardSubtitle>
              </CardBody>
            </Card>
            <Card body inverse color="dark" width="10%">
              <CardBody>
                <CardTitle>Others Attending</CardTitle>
                <CardText></CardText>
              </CardBody>
            </Card>
            {/* </CardDeck> */}
          </Col>
        </Row>
      </CardColumns>

      <h1>Black Girls Code Hackathon</h1>
      <h5> Welcome to Wonderland </h5>
      <p>Welcome to Wonderland is a place with the most unexpected of things. Follow Beardell on a 36-hour adventure as his world gets turned upside down! As you explore Wonderland, you'll encounter wild characters, use fantastical technology, and maybe even create the impossible. What are you waiting for? Into the rabbit hole you go!</p>

      <p>Schedule </p>
      <p>Friday 05:30 PM
Check-in Begins</p>


      <p>06:30 PM
Opening Ceremonies</p>

      <p>07:30 PM
Sponsor Expo</p>

      <p>08:30 PM
Dinner</p>

      <p>09:00 PM
Hacking Begins</p>

      <p>Saturday
      12:00 AM
Midnight Snack</p>

      <p>07:00 AM
Breakfast</p>

      <p>12:00 PM
Lunch</p>

      <p>06:00 PM
Dinner</p>

      <p>Sunday
      12:00 AM
Midnight Snack</p>

      <p>07:00 AM
Breakfast</p>

      <p>09:00 AM
Hacking Ends</p>

      <p>10:00 AM
Project Expo/Judging</p>

      <p>12:00 PM
Lunch</p>

      <p>01:00 PM
Closing Ceremonies</p>

      <p>02:00 PM
Buses Leave</p>
    </div>
  );
};
EventsPage.propTypes = {

}
EventsPage.defaultProps = {
  
}
export default EventsPage;