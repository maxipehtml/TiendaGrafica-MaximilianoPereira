import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import NotificationContext from "../../notifications/Notification";

const CartProduct = ({ id, name, quantity, price, medidas }) => {
    const { removeItem } = useContext(CartContext);
    const {setNotification} = useContext(NotificationContext)

    const productRemove = (id) => {
        setNotification(`Eliminaste ${quantity} unidades de ${name}`, 'error',2)
        removeItem(id);
    };

    return (
        <>
            <div className="productoCarrito">
                <div>
                    <h2>Producto: {name}</h2>
                </div>
                <div>
                    <h2>{medidas}</h2>
                </div>
                <div>
                    <h2>Unidades: {quantity}</h2>
                </div>
                <div>
                    <h2>subTotal: U$DT {price * quantity} </h2>
                </div>
                <div>

                    <button className="button-78 btn-eliminar btns-cart" onClick={()=>productRemove(id)}>Eliminar</button>

                    <button className="button-78 btn-eliminar" onClick={()=>productRemove(id)}>Eliminar</button>

                </div>
            </div>
        </>
    );
};

export default CartProduct;
