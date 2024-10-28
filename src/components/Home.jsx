import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from 'gsap';
// import { FaArrowRight } from "react-icons/fa";
import '../App.css';
import ButtonNext from './ButtonNext/ButtonNext';
import WaterRippleEffect from './WaterRippleEffect/WaterRippleEffect';

function Home() {
    const navigate = useNavigate();
    const buttonRef = useRef(null);

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
        <WaterRippleEffect onClick={handleClick}>
            <div className="contenedorComenzar">
                <h1 style={{fontSize:"4em"}}>BIENVENIDO</h1>
                {/* <button 
                    className="start-button"
                    onClick={handleClick}
                    ref={buttonRef}
                >
                    <FaArrowRight /> SIGUIENTE
                </button> */}
                <ButtonNext />
            </div>
        </WaterRippleEffect>
    );
}

export default Home;
