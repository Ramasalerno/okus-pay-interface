import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

function Gracias() {
    const [isAnimating, setIsAnimating] = useState(true); // Estado para controlar la animación

    useEffect(() => {
        // Función para lanzar confetti
        const launchConfetti = () => {
            const duration = 0.1 * 1000; // Duración en milisegundos
            const end = Date.now() + duration;

            // Lanza confetti hasta que se cumpla la duración
            (function frame() {
                confetti({
                    particleCount: 50,
                    angle: 90,
                    spread: 100,
                    startVelocity: 50,
                    decay: 0.9,
                    scalar: 1.5,
                    ticks: 60,
                    zIndex: 0,
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        };

        launchConfetti(); // Llama a la función para lanzar confetti

        // Cambiar el estado al finalizar la animación del círculo
        setTimeout(() => {
            setIsAnimating(false);
        }, 3000); // Esperar 3 segundos antes de mostrar el contenido

    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <div className="vh-100 position-relative">
            {/* Círculo de fondo */}
            {isAnimating && (
                <div className="circle-animation">
                    <h1 
                        className="text-center text-uppercase"
                        style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '0.3rem' }} // Ajustar tamaño aquí
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
            </div>
        </div>
    );
}

export default Gracias;
