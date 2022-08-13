import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartProduct = ({ id, name, quantity, price, medidas }) => {
    const { removeItem } = useContext(CartContext);
    const productRemove = (id) => {
        removeItem(id);
    };

    return (
        <>
            <div>
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
                    <button onClick={()=>productRemove(id)}>Eliminar</button>
                </div>
            </div>
        </>
    );
};

export default CartProduct;
