import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import BarraNavegacion from './components/NavBar';
import BarraNavegacionBrand from './components/CartWidget';

function App() {
  return (    
    <div className="App">
      <BarraNavegacion></BarraNavegacion>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Emanuel Moroni.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
