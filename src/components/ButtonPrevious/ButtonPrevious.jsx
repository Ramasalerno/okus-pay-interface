import { FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';

const ButtonPrevious = () => {

    const navigate = useNavigate();

    return (
        <Link
            className=" position-absolute text-uppercase"
            style={{ top: '20px', left: '20px', color: '#000' }} 
            onClick={() => navigate(-1)} // Navegar hacia atrás
        >
            <FaArrowLeft /> Volver atrás
        </Link>
    )
}

export default ButtonPrevious
