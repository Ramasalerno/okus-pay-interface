import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Carrito from './components/Carrito';
import MetodoPago from './components/MetodoPago';
import Autenticacion from './components/Autenticacion';
import Gracias from './components/Gracias';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/carrito" element={<Carrito />} />
				<Route path="/metodo-pago" element={<MetodoPago />} />
				<Route path="/autenticacion" element={<Autenticacion />} />
				<Route path="/gracias" element={<Gracias />} />
			</Routes>
		</Router>
	);
}

export default App;
