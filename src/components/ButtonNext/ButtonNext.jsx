import { useRef } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Ripples from 'react-ripples';
import styles from './ButtonNext.module.css';

const ButtonNext = () => {
    const navigate = useNavigate();
    const buttonRef = useRef(null);

    const handleClick = () => {
        navigate('/carrito');
    };

    return (
        <Ripples color="rgba(128, 128, 128, 0.3)">
            <div onClick={handleClick} ref={buttonRef} style={{ display: 'inline-flex' }}>
                <h5 className={styles.ButtonNext}>
                    {/* <FaArrowRight /> */} para comenzar haga click en cualquier parte de la pantalla
                </h5>
            </div>
        </Ripples>
    );
};

export default ButtonNext;
