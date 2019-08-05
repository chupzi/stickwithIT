import React from 'react';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Route, HashRouter, NavLink} from 'react-router-dom';
import Profile from './pages/Profile';
import Companies from './pages/Companies';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <div className="App">
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">StickWithIT</Navbar.Brand>
          <Nav>
            <ul className="header">
              <li className="list"><NavLink className="link" to="/">Home</NavLink></li>
              <li className="list"><NavLink className="link" to="/profile">Profile</NavLink></li>
              <li className="list"><NavLink className="link" to="/companies">Companies</NavLink></li>
            </ul>
          </Nav>
          </Navbar>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route path='/companies' component={Companies}/>
            </div>
      </div>
    </HashRouter>
  );
}

export default App;
