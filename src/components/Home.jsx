import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from 'gsap';
import '../App.css';
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
                <h1 className='textoBienvenida'>BIENVENIDO</h1>
                
                <div style={{ display: 'inline-flex' }}>
                <h5 className='ButtonNext'>
                    Para comenzar haga click en cualquier parte de la pantalla
                </h5>
            </div>
            </div>
        </WaterRippleEffect>
    );
}

export default Home;
