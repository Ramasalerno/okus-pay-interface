import { useNavigate } from 'react-router-dom';
import { IoFingerPrintOutline, IoHomeSharp } from "react-icons/io5";
import ButtonPrevious from './ButtonPrevious/ButtonPrevious';

function Autenticacion() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 position-relative fondo">
            {/* Botón Volver Atrás en la esquina superior izquierda */}
            <ButtonPrevious />

            <div className="text-center">
                <h1 className="mb-4 text-uppercase seleccionText">Coloque su mano en el dispositivo</h1>
                <button
                    className="botonEscanearPalma"
                    onClick={() => navigate('/escaneando')}>
                    <IoFingerPrintOutline className="aumentoTam" /> Escanear palma
                </button>
                <a href="https://okuspay.com.ar/">
                    <IoHomeSharp
                        color='#fff'
                        size={50}
                        className='text-right'
                        style={{ position: "absolute", right: "100px", bottom: "120px", cursor: "pointer" }}
                    />
                </a>
            </div>
        </div>
    );
}

export default Autenticacion;
