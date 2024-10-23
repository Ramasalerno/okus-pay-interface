import { useNavigate } from 'react-router-dom';

function MetodoPago() {
    const navigate = useNavigate();

    const handlePago = (tipoPago) => {
        if (tipoPago === 'okuspay') {
            navigate('/autenticacion');
        }
    };

    return (
        <div className="container vh-100 d-flex flex-column justify-content-center">
            <h1 className="text-center mb-5">Método de Pago</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-lg mb-4" onClick={() => handlePago('mercado_pago')}>
                        <div className="card-body text-center">
                            <h5 className="card-title">Mercado Pago</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg mb-4" onClick={() => handlePago('tarjeta')}>
                        <div className="card-body text-center">
                            <h5 className="card-title">Tarjeta Débito/Crédito</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg mb-4" onClick={() => handlePago('okuspay')}>
                        <div className="card-body text-center">
                            <h5 className="card-title">Okuspay</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetodoPago;
