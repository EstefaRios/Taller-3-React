import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementarContador = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  componentDidMount() {
    console.log('Contador montado');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Contador actualizado', this.state.contador);
  }

  componentWillUnmount() {
    console.log('Contador desmontado');
  }

  render() {
    return (
      <div className="contador">
        <h2>Contador: {this.state.contador}</h2>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default Contador;
