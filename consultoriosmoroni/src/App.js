import './App.css';
import React from 'react'
import BarraNavegacion from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {
  return (    
    <div className="App">
      <BarraNavegacion></BarraNavegacion>
      
      <ItemCount stock={10} initial={0}></ItemCount>
    </div>
  );
}

export default App;
