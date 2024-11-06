import '../App.css';
import ButtonPrevious from './ButtonPrevious/ButtonPrevious';
import { useNavigate } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";


function Carrito() {
    const navigate = useNavigate();

    // Datos de los productos con imágenes
    const productos = [
        { id: 1, nombre: 'SUPERMERCADO', precio: "150.000", imagen: 'https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/okusp/super.jpg' },
        { id: 2, nombre: 'RESTAURANTE', precio: "75.000", imagen: 'https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/okusp/restaurante.jpg' },
        { id: 3, nombre: 'EVENTOS', precio: "400.000", imagen: 'https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/okusp/evento.jpg' },
        { id: 4, nombre: 'TURISMO', precio: "1.200.000", imagen: 'https://raw.githubusercontent.com/RamiroSB/imagenes/refs/heads/main/okusp/turismo.jpg' }
    ];

    return (
        <div className='fondo'>
            {/* Botón Volver Atrás en la esquina superior izquierda */}
            <ButtonPrevious />

            <div className="container vh-100 d-flex flex-column justify-content-center position-relative">
                <h1 className="text-center mb-4 text-uppercase seleccionText">Selecciona un rubro</h1>
                <div className="row">
                    {productos.map(producto => (
                        <div key={producto.id} className="col-md-3 mb-4">
                            <div
                                className="card shadow-lg border-0"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate('/metodo-pago')}
                            >
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }} // Ajustar la imagen
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">${producto.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="https://okuspay.com.ar/">
                    <IoHomeSharp
                        color='#fff'
                        size={50}
                        className='text-right'
                        style={{ position: "absolute", right: "0px", bottom: "120px", cursor: "pointer" }}
                    
                    />
                </a>
            </div>
        </div>
    );
}

export default Carrito;
