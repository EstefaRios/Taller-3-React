import React, { Component } from 'react';
import './App.css';
import Contador from './Contador';
import CicloVida from './CicloVida';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ejemplo de Estado y Ciclo de Vida</h1>
        <Contador />
        <CicloVida />
      </div>
    );
  }
}

export default App;
