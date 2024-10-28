import { useState } from 'react';
import './WaterRippleEffect.css';

// eslint-disable-next-line react/prop-types
const WaterRippleEffect = ({ children, onClick }) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        const rippleContainer = event.currentTarget;
        const { clientX, clientY } = event;
        const { offsetLeft, offsetTop } = rippleContainer;

        const x = clientX - offsetLeft;
        const y = clientY - offsetTop;

        const newRipple = { x, y, key: Date.now() };
        setRipples((prevRipples) => [...prevRipples, newRipple]);

        // Remover el ripple después de 600ms
        setTimeout(() => {
            setRipples((prevRipples) => prevRipples.slice(1));
        }, 600);

        // Ejecuta la función onClick pasada como prop después del efecto de onda
        if (onClick) onClick();
    };

    return (
        <div className="ripple-container" onClick={createRipple}>
            {ripples.map((ripple) => (
                <span
                    key={ripple.key}
                    className="ripple"
                    style={{ left: ripple.x, top: ripple.y }}
                />
            ))}
            {children}
        </div>
    );
};

export default WaterRippleEffect;
