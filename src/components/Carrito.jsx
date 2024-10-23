import { useNavigate } from 'react-router-dom';

function Carrito() {
    const navigate = useNavigate();

    const productos = [
        { nombre: 'Máquina de cortar pelo', precio: 15000 },
        { nombre: 'Maceta', precio: 5000 },
        { nombre: '1kg de carne', precio: 10000 },
        { nombre: 'Juego de herramientas', precio: 12000 }
    ];

    const total = productos.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div className="container vh-100 d-flex flex-column justify-content-center">
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
            <button
                className="btn btn-success btn-lg mx-auto d-block"
                onClick={() => navigate('/metodo-pago')}>
                Siguiente
            </button>
        </div>
    );
}

export default Carrito;
