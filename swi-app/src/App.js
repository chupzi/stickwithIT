import React from 'react';
import './App.css';
import CardModal from './pages/Components/Card/CardModal';
import Box from './pages/Components/Box/Box';
import Media from './pages/Components/Media/MediaHolder';
import Profile from './pages/Profile';
import Home from './pages/Home';

import Post from './pages/Components/Post/Post';
import {Nav, Navbar} from 'react-bootstrap';
import {Route, HashRouter, NavLink} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">StickWithIT</Navbar.Brand>
          <Nav>
            <ul className="header">
              <li className="list"><NavLink className="link" to="/">Home</NavLink></li>
              <li className="list"><NavLink className="link" to="/Companies">Companies</NavLink></li>
              <li className="list"><NavLink className="link" to="/eventspage">Events</NavLink></li>
              <li className="list"><NavLink className="link" to="/profile">Profile</NavLink></li>
              <li className="list"><NavLink className="link" to="/contact">Contact</NavLink></li>
            </ul>
          </Nav>
          </Navbar>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/companies" component={Companies}/>
              <Route path="/profile" component={Profile}/>
              <Route path='/contact' component={Post} />
            </div>
      </div>
    </HashRouter>
  );
}

export default App;
