import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Escaneando() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirigir a "/gracias" después de 5 segundos
        const timer = setTimeout(() => {
            navigate('/gracias');
        }, 5000);

        // Limpiar el timer al desmontar el componente
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-black">
            <h1 className="escaneandoText">Verificando su identidad</h1>
            <h2 className="escaneandoTextMini fs-3">Por favor, aguarde unos instantes</h2>
            <img 
                src="https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/Biometr%C3%ADa.gif" 
                alt="Descripción de la imagen" 
                className="mt-4" 
                style={{ width: '40%' }}
            />
        </div>
    );
}

export default Escaneando;
