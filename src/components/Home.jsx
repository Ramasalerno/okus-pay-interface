import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="contenedorComenzar">
            <button
                className="start-button"
                onClick={() => navigate('/carrito')}>
                Comenzar
            </button>
        </div>
    );
}

export default Home;
