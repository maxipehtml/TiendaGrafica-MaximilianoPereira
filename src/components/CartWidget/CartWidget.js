import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } =useContext(CartContext)

    const quantity = getQuantity()


    return (
        <Link to= '/cart' className={`${quantity === 0 ? 'disabled' : ''} linkContador`} >
            <img className= 'carrito' src='img/carrito80x80.png' alt="carro"/>
            {quantity}
        </Link>
    );
}

export default CartWidget