import React, { Component } from 'react';

class Viajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viajes: [],
      direccion: '',
    };
  }

  agregarViaje = () => {
    const { direccion } = this.state;
    const nuevoViaje = {
      id: this.state.viajes.length + 1,
      direccion,
      estado: 'pendiente',
      conductor: null,
    };
    this.setState({ viajes: [...this.state.viajes, nuevoViaje], direccion: '' });
  };

  completarViaje = (viajeId) => {
    const viajesActualizados = this.state.viajes.map((viaje) =>
      viaje.id === viajeId ? { ...viaje, estado: 'completado' } : viaje
    );
    this.setState({ viajes: viajesActualizados });
  };

  handleChange = (event) => {
    this.setState({ direccion: event.target.value });
  };

  render() {
    const { viajes, direccion } = this.state;

    return (
      <div className='contenedor'>
        <h2>Viajes</h2>
        <div>
          <input type="text" placeholder="Dirección del viaje..." value={direccion} onChange={this.handleChange} />
          <button onClick={this.agregarViaje}>Solicitar viaje</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Dirección</th>
              <th>Estado</th>
              <th>Conductor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {viajes.map((viaje) => (
              <tr key={viaje.id}>
                <td>{viaje.id}</td>
                <td>{viaje.direccion}</td>
                <td>{viaje.estado}</td>
                <td>{viaje.conductor ? viaje.conductor.nombre : '-'}</td>
                <td>
                  {viaje.estado === 'pendiente' ? (
                    <button onClick={() => this.completarViaje(viaje.id)}>Completar</button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Viajes;
