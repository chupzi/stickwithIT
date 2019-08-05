import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const SideBar = (props) => {
  return (
    <div style={{width:"15%", marginTop:"10%"}}>
      <Card>
        <CardHeader>About</CardHeader>
        <CardBody>
          <CardText>School: GA Tech</CardText>
          <CardText>Year: Senior</CardText>
          <CardText>Email: Buzz@gatech.edu</CardText>
          <CardText>LinkedIn: linkedin.com/in/buzz-stingem</CardText>
        </CardBody>
      </Card>
        <br></br>
      <Card>
        <CardHeader>Interests</CardHeader>
        <CardBody>
          <CardText>- Computer Science</CardText>
          <CardText>- Artifical Intelligence</CardText>
          <CardText>- Soccer</CardText>
        </CardBody>
      </Card>

      <br></br>

      <Card>
        <CardHeader>Upcoming Events</CardHeader>
        <CardBody>
          <CardText><a href={"https://pages.beamery.com/vmware/page/codehouse"}>VMWare Codehouse</a></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default SideBar;
