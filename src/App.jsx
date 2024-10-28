import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Carrito from './components/Carrito';
import MetodoPago from './components/MetodoPago';
import Autenticacion from './components/Autenticacion';
import Gracias from './components/Gracias';
import Escaneando from './components/Escaneando';
import WaterRippleEffect from './components/WaterRippleEffect/WaterRippleEffect';

function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <WaterRippleEffect>
                            <Home />
                        </WaterRippleEffect>
                    } 
                />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/metodo-pago" element={<MetodoPago />} />
                <Route path="/autenticacion" element={<Autenticacion />} />
                <Route path="/escaneando" element={<Escaneando />} />
                <Route path="/gracias" element={<Gracias />} />
            </Routes>
        </Router>
    );
}

export default App;
