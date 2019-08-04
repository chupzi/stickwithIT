import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormControl, Form, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#companies">Companies</Nav.Link>
        <Nav.Link href="#events">Events</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
} 

export default App;
