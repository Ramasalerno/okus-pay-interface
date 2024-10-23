import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from 'gsap';
import '../App.css';

function Home() {
    const navigate = useNavigate();
    const buttonRef = useRef(null); // Referencia para el botón

    const handleClick = () => {
        // Efecto de explosión
        gsap.to(buttonRef.current, {
            scale: 5.5,
            opacity: 0.5,
            duration: 0.8,
            ease: "power1.out",
            onComplete: () => {
                navigate('/carrito');
            }
        });
    };

    return (
        <div className="contenedorComenzar">
            <button
                className="start-button"
                onClick={handleClick}
                ref={buttonRef} // Asignar la referencia al botón
            >
                Comenzar
            </button>
        </div>
    );
}

export default Home;
