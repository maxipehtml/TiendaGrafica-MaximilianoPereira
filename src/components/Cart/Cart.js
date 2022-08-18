import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import CartProduct from "./CartProduct";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import './Cart.css'
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../services/firebase";
import { getProducts } from "../../asyncMock";



const Cart = () => {
    const { getQuantity, clearCart, getTotal, cart } = useContext(CartContext)

    const cantidadTotal = getQuantity()
    const total = getTotal()




    let noProd = cantidadTotal === 0

/*     const createProducts = () => {
        

    
    } */

    const createBuy = () => {
        const buy = {
            buyer: {
                name: 'Zeta',
                phone: '123123123',
                email: 'zeta@gmail.com',
            },
            items: cart,
            total
        }
    console.log(buy);

    addDoc(collection(database, 'sales'), buy).then(response =>{
        console.log(response);
    })
    }
    
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
            <div className="confirmarCarrito">
                <button onClick={() => clearCart()} className="button-78 vaciarCarrito btns-cart">Vaciar Carrito</button>
                <button onClick={createBuy} className="button-78 btn-confirmar btns-cart" >Confimar Compra</button>
            </div>
            <ItemListContainer greeting="Segui comprando nuestros productos" />

        </div>
        
    )
}

export default Cart