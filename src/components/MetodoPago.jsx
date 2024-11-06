import { useNavigate } from 'react-router-dom';
import { IoFingerPrintOutline } from "react-icons/io5";
import { FaRegCreditCard, FaRegHandshake } from "react-icons/fa";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ButtonPrevious from './ButtonPrevious/ButtonPrevious';
import { IoHomeSharp } from "react-icons/io5";

function MetodoPago() {
    const navigate = useNavigate();
    const headingRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(headingRef.current.children, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 })
            .then(() => {
                // Una vez que termina la animación del título, activamos el efecto hover en la tarjeta una sola vez
                gsap.to(cardRef.current, {
                    scale: 2, duration: 0.1, onComplete: () => {
                        gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
                    }
                });
            });
    }, [headingRef, cardRef]);

    const handlePago = (tipoPago) => {
        if (tipoPago === 'okuspay') {
            navigate('/autenticacion');
        }
    };

    return (
        <div className='fondo'>
            <ButtonPrevious />
            <div className="container vh-100 d-flex flex-column justify-content-center position-relative">
                {/* Botón Volver Atrás en la esquina superior izquierda */}

                <h1 ref={headingRef} className="text-center mb-5 seleccionTitulo">
                    <span>ELEGIR</span> <span>METODO</span> <span>DE</span> <span>PAGO</span>
                </h1>
                <div className="row">
                    <div className="col-md-4 botonMetodo">
                        <div className="card shadow-lg mb-4 botonMetodo" onClick={() => handlePago('mercado_pago')}
                            style={{
                                border: 'none',
                            }}>
                            <div className="card-body text-center botonSelectorPagos">
                                <h5 className="card-title"> <FaRegHandshake className="aumentoTam" /> Mercado Pago</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div ref={cardRef} className="card shadow-lg mb-4" onClick={() => handlePago('okuspay')}
                            style={{
                                border: 'none',
                            }}>
                            <div className="card-body text-center botonSelectorPagos">
                                <h5 className="card-title"><IoFingerPrintOutline className="aumentoTam" /> OkusPay</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-lg mb-4" onClick={() => handlePago('tarjeta')}
                            style={{
                                border: 'none',
                            }}>
                            <div className="card-body text-center botonSelectorPagos">
                                <h5 className="card-title"><FaRegCreditCard className="aumentoTam" /> Tarjeta</h5>
                            </div>
                        </div>
                    </div>

                </div>
                    <a href="https://okuspay.com.ar/">
                        <IoHomeSharp
                            color='#fff'
                            size={50}
                            className='text-right'
                            style={{ position: "absolute", right: "0px", bottom: "120px", cursor:"pointer" }}
                        />
                    </a>
            </div>
        </div>
    );
}

export default MetodoPago;
