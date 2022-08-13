import { useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import CartProduct from "./CartProduct";
import NotificationContext from "../../notifications/Notification";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Cart = () => {
    const { getQuantity, clearCart, getTotal, cart } = useContext(CartContext)

    const cantidadTotal = getQuantity()
    const total = getTotal()

    const {setNotification} = useContext(NotificationContext)


    let noProd = cantidadTotal === 0

/*     useEffect(() => {

        if (noProd) {
            setNotification('No hay productos en el carrito', 'error',2)
        }
        
      }, []) */

    
    if ( noProd ) {
        
        return (
            <div>
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
            <div>
                <button onClick={() => clearCart()} className="">Vaciar Carrito</button>
                <button className="">Confimar Carrito</button>
            </div>
            <ItemListContainer greeting="Segui comprando nuestros productos" />

        </div>
        
    )
}

export default Cart