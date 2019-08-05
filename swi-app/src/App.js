import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardModal from './Components/Card/CardModal';
import Box from './Components/Box/Box';
import Media from './Components/Media/MediaHolder';

import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="hi" style={{ display: 'grid', gridTemplateColumns:'repeat(4, 1fr)'}}>
          {/* <CardModal  /> 
          <CardModal />
          <CardModal />
          <CardModal /> */}
        </div>
      <Box />
      <Media />
    </div>
  )}

export default App;
