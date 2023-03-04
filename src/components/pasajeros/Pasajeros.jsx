import React, { Component } from 'react';

class Pasajeros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pasajeros: [],
      nombrePasajero: '',
      direccion: '',
      conductoresDisponibles: [],
      conductorSeleccionado: null,
    };
  }

  registrarPasajero = () => {
    if (this.state.nombrePasajero.trim() === '') {
      alert('Por favor ingrese un nombre válido');
      return;
    }

    const nuevoPasajero = {
      id: this.state.pasajeros.length + 1,
      nombre: this.state.nombrePasajero,
    };
    this.setState({ pasajeros: [...this.state.pasajeros, nuevoPasajero], nombrePasajero: '' });
  };

  handleChange = (event) => {
    this.setState({ direccion: event.target.value });
  };

  solicitarViaje = () => {
    // Simulamos una lista de conductores disponibles
    //const conductores = ['Juan', 'Pedro', 'María'];
    const conductores = [ 'Juan Pérez', 'María Gómez', 'Pedro Castro', 'Ana Martínez', 'Luisa Rojas', ];

    // Actualizamos el estado con los conductores disponibles y el primer conductor seleccionado
    this.setState({ conductoresDisponibles: conductores, conductorSeleccionado: conductores[0] });
  };

  render() {
    const { pasajeros, nombrePasajero, direccion, conductoresDisponibles, conductorSeleccionado } = this.state;

    return (
      <div className='contenedor'>
        <h1>Pasajeros</h1>
        <div>
          {/* Input para ingresar el nombre del nuevo pasajero */}
          <input type="text" placeholder="Nombre del pasajero..." value={nombrePasajero} onChange={(event) => this.setState({ nombrePasajero: event.target.value })} />
          {/* Botón para registrar un nuevo pasajero */}
          <button onClick={this.registrarPasajero}>Registrar pasajero</button>
        </div>
        {/* Mostrar la lista de pasajeros existentes */}
        <ul>
          {pasajeros.map((pasajero) => (
            <li key={pasajero.id}>{pasajero.nombre}</li>
          ))}
        </ul>
        <div>
          {/* Input para ingresar la dirección del nuevo viaje */}
          <input type="text" placeholder="Dirección del viaje..." value={direccion} onChange={this.handleChange} />
          {/* Botón para solicitar un nuevo viaje */}
          <button onClick={this.solicitarViaje}>Solicitar viaje</button>
        </div>
        {/* Mostrar la lista de conductores disponibles */}
        {conductoresDisponibles.length > 0 && (
          <div>
            <label>Conductores disponibles:</label>
            <select value={conductorSeleccionado} onChange={(event) => this.setState({ conductorSeleccionado: event.target.value })}>
              {conductoresDisponibles.map((conductor) => (
                <option key={conductor}>{conductor}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }
}

export default Pasajeros;
