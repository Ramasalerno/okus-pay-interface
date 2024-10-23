import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowRight } from "react-icons/fa";
import '../App.css';

function Home() {
    const navigate = useNavigate();
    const buttonRef = useRef(null); // Referencia para el botón

    const handleClick = () => {
        // Efecto de explosión
        gsap.to(buttonRef.current, {
            scale: 3.5,
            opacity: 0.5,
            duration: 0.6,
            ease: "power1.out",
            onComplete: () => {
                navigate('/carrito');
            }
        });
    };

    return (
        <div className="contenedorComenzar">
            <h1>COMENZAR</h1>
            <Link className="start-button"
                onClick={handleClick}
                ref={buttonRef}>
                    <FaArrowRight />  SIGUIENTE
            </Link>
        </div>
    );
}

export default Home;
