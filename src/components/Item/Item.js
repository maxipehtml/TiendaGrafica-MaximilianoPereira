import './Item.css'
import { Link} from 'react-router-dom';

const Item = ({ producte }) => {

    return (
                    <div className="cards1">
                        <h1>{producte.name.toUpperCase()}</h1>
                        <img className="imagenProduct0" src={producte.img} alt="" />
                        <Link to={`/detail/${producte.id}`} className='button-78'>Ver Detalles</Link>
                        <h2>U$DT {producte.price}</h2>
                        <h3>Stock: {producte.stock}</h3>
                    </div>
        

    )
}

export default Item
