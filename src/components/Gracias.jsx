import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import anime from 'animejs/lib/anime.es.js';

function Gracias() {
    const textRef = useRef(null); // Referencia para el texto

    useEffect(() => {
        // Función para lanzar confetti
        const launchConfetti = () => {
            const duration = 0.5 * 1000; // Duración en milisegundos
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

        /* launchConfetti() */; // Llama a la función para lanzar confetti

        // Animar el texto desde abajo hacia arriba usando Anime.js
        anime({
            targets: textRef.current,
            translateY: [50, 0], // Desde 50px abajo a su posición original
            opacity: [0, 1], // De invisible a visible
            duration: 3000, // Duración de la animación en milisegundos
            easing: 'easeOutExpo', // Easing para suavizar la animación
        });

    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-gracias">
            <img 
                src="https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/LogoSinFondo.png" 
                alt="Descripción de la imagen" 
                className="mt-1" 
                style={{ width: '30%' }}
            />
            {/* <h1 
            ref={textRef} className="text-center text-uppercase"
            style={{ color: 'white' }}
            >Hola Martin Anusic</h1> */}
            <h1 
            ref={textRef} className="text-center text-uppercase"
            style={{ color: 'white' }}
            >Muchas gracias por su compra</h1>
            {/* Agrega tu imagen aquí y reduce su tamaño al 50% */}
            
        </div>
    );
}

export default Gracias;
