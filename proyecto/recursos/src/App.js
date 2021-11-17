import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Tienda from './components/paginas/Tienda'
import Contacto from './components/paginas/Contacto'


function App() {
  return (
    <div className="App">
   
      <Router>
      <Navbar/>
      </Router>

    </div>
  );
}

export default App;
