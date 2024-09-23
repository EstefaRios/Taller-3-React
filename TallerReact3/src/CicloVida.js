import React, { Component } from 'react';

class CicloVida extends Component {
  componentDidMount() {
    console.log('Ciclo de vida montado');
  }

  componentDidUpdate() {
    console.log('Ciclo de vida actualizado');
  }

  componentWillUnmount() {
    console.log('Ciclo de vida desmontado');
  }

  render() {
    return (
      <div className="ciclo-vida">
        <h2>Ciclo de Vida del Componente</h2>
        <p>Mira la consola para los mensajes del ciclo de vida.</p>
      </div>
    );
  }
}

export default CicloVida;
