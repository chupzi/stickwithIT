import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardModal from './Components/Card/CardModal';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div style={{display:'flex', flexWrap: 'wrap'}}> */}
      <NavBar />
        <div className="hi" style={{ display: 'grid', gridTemplateColumns:'repeat(4, 1fr)'}}>
          <CardModal  /> 
          <CardModal />
          <CardModal />
          <CardModal />
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
