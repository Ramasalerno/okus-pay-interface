import { useEffect, useState } from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Gracias() {
    const [isAnimating, setIsAnimating] = useState(true); // Estado para controlar la animación

    useEffect(() => {
        // Cambiar el estado al finalizar la animación del círculo
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Esperar 3 segundos antes de mostrar el contenido

    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <div className="vh-100 position-relative">
            {/* Círculo de fondo */}
            {isAnimating && (
                <div>
                    <div className="circle-animation">
                    </div>
                    <h1
                        className="text-center text-uppercase"
                        style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2.3rem' }} // Ajustar tamaño aquí
                    >
                        Muchas gracias por su compra
                    </h1>
                </div>
            )}

            {/* Contenido principal */}
            <div className={`d-flex flex-column justify-content-center align-items-center vh-100 ${isAnimating ? 'd-none' : ''}`}>
                <img
                    src="https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/okusp/okplv.png"
                    alt="Descripción de la imagen"
                    className="imagenGracias"
                    style={{ width: '50%' }}
                />
                <Link to={"/"} className='reiniciar'>Reiniciar</Link>
                <a href="https://okuspay.com.ar/">
                    <IoHomeSharp
                        color='#000'
                        size={50}
                        className='text-right'
                        style={{ position: "absolute", right: "100px", bottom: "120px", cursor: "pointer" }}
                    />
                </a>
            </div>
        </div>
    );
}

export default Gracias;
