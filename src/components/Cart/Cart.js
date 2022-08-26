import "./Cart.css";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./CartProduct";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom"



const Cart = () => {

    const { getQuantity, clearCart, getTotal, cart } = useContext(CartContext);
 

    const cantidadTotal = getQuantity();
    const total = getTotal();



    let noProd = cantidadTotal === 0;


    if (noProd) {
        return (
            <div className="carritoCompras">
                <h2>Agrega productos al carrito</h2>
                <ItemListContainer greeting="Te sugerimos los siguientes productos :" />
            </div>
        );
    }

    return (
        <div className="carritoCompras">
            <h1>Carrito de Compras</h1>
            {cart.map((prod) => (
                <CartProduct key={prod.id} {...prod} />
            ))}
            <h2>Total: U$DT {total}</h2>
            

            <div className="confirmarCarrito">
                <button
                    onClick={() => clearCart()}
                    className="button-78 vaciarCarrito btns-cart"
                >
                    Vaciar Carrito
                </button>
                <Link to='/checkout'
                    className="button-78 btn-confirmar btns-cart"
                >
                    Ir a Confirmar Compra
                </Link>

            </div>
            <ItemListContainer greeting="Segui comprando nuestros productos" />
        </div>
    );
};

export default Cart;
