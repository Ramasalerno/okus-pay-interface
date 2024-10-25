import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa"; // Importar el ícono de flecha hacia la izquierda
import '../App.css';

function Carrito() {
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
                navigate('/metodo-pago');
            }
        });
    };

    const productos = [
        { nombre: 'Máquina de cortar pelo', precio: 15000 },
        { nombre: 'Maceta', precio: 5000 },
        { nombre: '1kg de carne', precio: 10000 },
        { nombre: 'Juego de herramientas', precio: 12000 }
    ];

    const total = productos.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div className="container vh-100 d-flex flex-column justify-content-center">
            {/* Botón Volver Atrás en la esquina superior izquierda */}
            <button 
                className="btn btn-danger position-absolute" 
                style={{ top: '20px', left: '20px', color: 'white' }}
                onClick={() => navigate(-1)} // Navegar hacia atrás
            >
                <FaArrowLeft /> Volver atrás
            </button>

            <h1 className="text-center mb-5">Tu Carrito</h1>
            <ul className="list-group mb-5">
                {productos.map((producto, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {producto.nombre}
                        <span>${producto.precio}</span>
                    </li>
                ))}
            </ul>
            <h3 className="text-center mb-4">Total: ${total}</h3>
            <Link className="start-button" onClick={handleClick} ref={buttonRef}>
                <FaArrowRight /> SIGUIENTE
            </Link>
        </div>
    );
}

export default Carrito;



            