import React from 'react';
import './App.css';
import CardModal from './Components/Card/CardModal';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';
import {Nav, Navbar} from 'react-bootstrap';
import {Route, HashRouter, NavLink} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <NavBar /> */}
          {/* <div className="hi" style={{ display: 'grid', gridTemplateColumns:'repeat(4, 1fr)'}}>
            <CardModal  /> 
            <CardModal />
            <CardModal />
            <CardModal />
          </div> */}
          {/* <Post /> */}
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">StickWithIT</Navbar.Brand>
          <Nav>
            <ul className="header">
              <li className="list"><NavLink className="link" to="/">Home</NavLink></li>
              <li className="list"><NavLink className="link" to="/stuff">Stuff</NavLink></li>
              <li className="list"><NavLink className="link" to="/contact">Contact</NavLink></li>
            </ul>
          </Nav>
          </Navbar>
            <div className="content">
              <Route exact path="/" component={CardModal}/>
              <Route path="/stuff" component={Post}/>
              <Route path='/contact' component={Post} />
            </div>
      </div>
    </HashRouter>
  );
}

export default App;
