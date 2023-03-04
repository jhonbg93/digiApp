import React, { Component } from 'react';
import { conductores } from '../../pure/conductor.js'

class Conductores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conductores: [],
      conductoresDisponibles: [],
      conductoresCercanos: [],
      conductorBuscado: '',
    };
  }

  componentDidMount() {
    this.setState({ conductores, conductoresDisponibles: conductores });
  }

  buscarConductor = (event) => {
    const conductorBuscado = event.target.value.toLowerCase();
    const conductoresFiltrados = this.state.conductores.filter(
      (conductor) =>
        conductor.nombre.toLowerCase().includes(conductorBuscado) ||
        conductor.cedula.toLowerCase().includes(conductorBuscado) ||
        conductor.id.toString().includes(conductorBuscado)
    );
    this.setState({ conductoresDisponibles: conductoresFiltrados, conductorBuscado });
  };

  ///

  

  obtenerConductoresCercanos = () => {
    const latitud = 4.7110;
    const longitud = -74.0721;
    const conductoresCercanos = this.state.conductores.filter((conductor) => {
      const distancia = Math.sqrt(
        Math.pow(latitud - conductor.latitud, 2) + Math.pow(longitud - conductor.longitud, 2)
      );
      return distancia <= 3;
    });
    this.setState({ conductoresCercanos });
  };

  render() {
    const { conductoresDisponibles, conductoresCercanos, conductorBuscado,  } = this.state;

    return (
      <div className='contenedor'>
        <h2>Conductores</h2>
        <div className='inputs'>
          <input type="text" placeholder="Buscar conductor..." value={conductorBuscado} onChange={this.buscarConductor} />
         
      </div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cédula</th>
              <th>ID</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            {conductoresDisponibles.map((conductor) => (
              <tr key={conductor.id}>
                <td>{conductor.nombre}</td>
                <td>{conductor.cedula}</td>
                <td>{conductor.id}</td>
                <td>{conductor.latitud}</td>
                <td>{conductor.longitud}</td>
                <td>{conductor.disponible ? 'Sí' : 'No'}</td>
              </tr>
            ))  }
          </tbody>
        </table>
      <div>
      <button onClick={this.obtenerConductoresCercanos}>Obtener conductores cercanos</button>
    </div>
    {conductoresCercanos.length > 0 && (
      <div>
        <h2>Conductores cercanos</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cédula</th>
              <th>ID</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            {conductoresCercanos.map((conductor) => (
              <tr key={conductor.id}>
                <td>{conductor.nombre}</td>
                <td>{conductor.cedula}</td>
                <td>{conductor.id}</td>
                <td>{conductor.latitud}</td>
                <td>{conductor.longitud}</td>
                <td>{conductor.disponible ? 'Sí' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
}
}

export default Conductores;
