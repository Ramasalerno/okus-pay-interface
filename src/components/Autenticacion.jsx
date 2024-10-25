import { useNavigate } from 'react-router-dom';
import { IoFingerPrintOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa"; // Importar el ícono de flecha hacia la izquierda

function Autenticacion() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light position-relative">
            {/* Botón Volver Atrás en la esquina superior izquierda */}
            <button 
                className="btn btn-danger position-absolute" 
                style={{ top: '20px', left: '20px', color: 'white' }}
                onClick={() => navigate(-1)} // Navegar hacia atrás
            >
                <FaArrowLeft /> Volver atrás
            </button>

            <div className="text-center">
                <h1 className="mb-4">Coloque su mano en el dispositivo</h1>
                <button
                    className="botonEscanearPalma"
                    onClick={() => navigate('/escaneando')}>
                    <IoFingerPrintOutline className="aumentoTam" /> Escanear palma
                </button>
            </div>
        </div>
    );
}

export default Autenticacion;
