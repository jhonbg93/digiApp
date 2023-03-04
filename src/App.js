
import './App.css';
import './normalize.css';
import Conductores from './components/conductores/Conductores.jsx';
import Viajes from './components/viajes/viajes';
import Pasajeros from './components/pasajeros/Pasajeros.jsx';


function App() {
  return (
    <div className="App">
    <div><h1>DigiTaxi</h1></div>
    <div className='componentes'>
    <Conductores/>
    <Pasajeros/>
    <Viajes/>
     
    </div>     
    </div>
  );
}

export default App;
