import { useNavigate } from 'react-router-dom';

function Autenticacion() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="mb-4">Coloque su mano en el dispositivo</h1>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate('/gracias')}>
                    Escanear palma
                </button>
            </div>
        </div>
    );
}

export default Autenticacion;
