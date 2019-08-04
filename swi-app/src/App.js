import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Button, FormControl, Form, Nav, Navbar } from 'react-bootstrap';
import HomeComponent from 'src/pages/HomeComponent'
import ProfileComponent from 'src/pages/ProfileComponent'
import EventsComponent from 'src/pages/EventsComponent'

function App() {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">StickWithIt</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#companies">Companies</Nav.Link>
        <Nav.Link href="#events">Events</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      <Nav.Link href="#profile" className="mr-sm-2">Profile</Nav.Link>
    </Navbar>
  );
} 

export default App;
