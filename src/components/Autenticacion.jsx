import { useNavigate } from 'react-router-dom';
import { IoFingerPrintOutline } from "react-icons/io5";
import ButtonPrevious from './ButtonPrevious/ButtonPrevious';

function Autenticacion() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light position-relative">
            {/* Botón Volver Atrás en la esquina superior izquierda */}
            <ButtonPrevious />

            <div className="text-center">
                <h1 className="mb-4 text-uppercase">Coloque su mano en el dispositivo</h1>
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
