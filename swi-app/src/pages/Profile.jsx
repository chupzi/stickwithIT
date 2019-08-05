import React from 'react';
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText, CardImg, CardSubtitle, Container, Row, Col, textAlign
} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import MediaHolder from './Components/Media/MediaHolder';
import Jumbotron from 'react-bootstrap/Jumbotron';

const SideBar = (props) => {
    return (
        <div>
            <div style={{ width: "100%" }}>
                <Jumbotron>
                <Container>
                    <Row style={{ paddingTop: "5%" }}>
                        <Col xs={3} md={4} style={{ display: "block" }}>
                            <Image src="https://media.licdn.com/dms/image/C4D03AQGcTN26EHo7Qg/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=Th2Txn8sHqW7nwVBWtXDFjvvimOycznRwkYITKmHD1M" roundedCircle />
                        </Col>
                        <Col xs="auto" style={{ display: "block", alignItems: "center", justifyContent: "center" }}>
                            <br></br>
                            <br></br>
                            <h1><b>Angelica Hernandez (She/Her)</b></h1>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
                {/* <Card>
            <CardImg top width="100%" src="swi-app/src/Components/img/connection_img.jpg" alt="Card image cap" />
            <CardBody>
                <CardSubtitle>100 Connections</CardSubtitle>
            </CardBody>
        </Card> */}
            </div>
            <div className="yo">
                {/* <MediaHeading text='whatever'/> */}
                <div style={{ width: "30%",  marginLeft: "3%" }}>
                    <Card>
                        <CardHeader>
                            <b>About Me</b>
                        </CardHeader>
                        <CardBody>
                            <CardText style={{ textAlign: "center" }}><b>Angelica Hernandez</b></CardText>
                            <CardText>School: Dunwoody High School</CardText>
                            <CardText>Year: Junior</CardText>
                            <CardText>Email: anghernan@dunwoodyhs.edu</CardText>
                            <CardText>LinkedIn: linkedin.com/in/angelica-hernandez1240985</CardText>
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
                <span style={{ padding: "3% 0 0 2%", width: "70%" }}>
                    <MediaHolder text="RSVP to attend VMWare's amazing innovation day. Get to see all our latest technologies an dsoftware, and what you'll see in upcoming months/years." body={true}
                        heading={`Kiara Rose commented "Can't wait to attend this exciting day =-)" `} src={"https://pageflows.imgix.net/media/logos/coursera.jpeg?auto=compress&ixlib=python-1.1.2&s=c46f830b55825f2f906c333140f4de1f"}>
                    </MediaHolder>
                    <br></br>
                    <br></br>
                    <MediaHolder text="Students participating in this year’s Girls Who Code Summer Immersion Program recently visited Disneyland Resort for a special peek at the technology behind the magic at Disney Parks, including some of the exciting innovations
                    at work in Star Wars: Galaxy’s Edge! A nationwide non-profit organization, Girls Who Code works to teach high school students about technology and close the gender gap in technology fields by providing computer science education to girls." body={true} 
                    heading="You liked this post: Disneyland Resort Invites 'Girls Who Code' to Explore Technology of Star Wars: Galaxy's Edge">
                    </MediaHolder>
                    <br></br>
                    <br></br>
                    <MediaHolder text="The leader in the market of modern technology Apple company  offers a wide choice of decisions how to motivate students to study better and blow up their creativity." body={true}
                        heading={`You commented on Apple's Post: How Apple Technology Contrubutes to Education`} src={"media.licdn.com/dms/image/C4E03AQEnsk8JYSMlJA/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=bgYaj89uG2czH0IH5ywx65r3tNrCk7Q4pFUTKQxrERk"}>
                    </MediaHolder>
                </span>
                <span style={{ padding: "3% 0 0 2%" }}>
                <Container>
                   
                        <Col xs={3} md={4}>
                            <Image src="https://image.flaticon.com/icons/svg/753/753115.svg" width="62" height="62" style={{justifyContent: "center"}}/>
                            <text>23 connections</text>
                        </Col>
                        <br></br>
                        <Col xs="auto" style={{paddingTop: "4px"}}>
                            <Image src="https://pageflows.imgix.net/media/logos/coursera.jpeg?auto=compress&ixlib=python-1.1.2&s=c46f830b55825f2f906c333140f4de1f" width="62" height="62" style={{justifyContent: "center"}}/>
                        </Col>
                    
                </Container>
                </span>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default SideBar;
