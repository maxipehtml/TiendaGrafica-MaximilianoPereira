import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import CartProduct from "./CartProduct";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import './Cart.css'

const Cart = () => {
    const { getQuantity, clearCart, getTotal, cart } = useContext(CartContext)

    const cantidadTotal = getQuantity()
    const total = getTotal()




    let noProd = cantidadTotal === 0

/*     useEffect(() => {

        if (noProd) {
            setNotification('No hay productos en el carrito', 'error',2)
        }
        
      }, []) */

    
    if ( noProd ) {
        
        return (
            <div className="carritoCompras">
            <h2>Agrega productos al carrito para realizar la compra</h2>
            <ItemListContainer greeting="Te sugerimos los siguientes productos :" />
            </div>
            
        )
        
    }

    return (

        <div className="carritoCompras">
            <h1>
                Carrito de Compras
            </h1>
            {cart.map(prod => <CartProduct key={prod.id} {...prod}/>)}
            <h2>Total: U$DT {total}</h2>

            <div className="confirmarCarrito ">
                <button onClick={() => clearCart()} className="button-78 vaciarCarrito btns-cart">Vaciar Carrito</button>
                <button className="button-78 btn-confirmar btns-cart">Confimar Carrito</button>

            <div className="confirmarCarrito">
                <button onClick={() => clearCart()} className="button-78 vaciarCarrito">Vaciar Carrito</button>
                <button className="button-78 btn-confirmar">Confimar Carrito</button>

            </div>
            <ItemListContainer greeting="Segui comprando nuestros productos" />

        </div>
        
    )
}

export default Cart