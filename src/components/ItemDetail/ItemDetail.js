import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { CartContext   } from "../../context/CartContext";
import NotificationContext from "../../notifications/Notification";



const ItemDetail = ({ id, name, img, description, price, stock, montaje, medidas}) => {

    const [quantity, setQuantity] = useState(0);

    const {addItem, getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)


    const quantityAdded = getProductQuantity(id)
   

    const handleOnAdd = (quantity) => {
        console.log('Agregaste '+quantity+' items al carrito');    
        setNotification(`Agregaste ${quantity} ${name} al carrito`, 'success')
        setQuantity(quantity);
        addItem({id, name, price, quantity})
        
    }

 /////////////
/*     const [dolarblue, setBlue] = useState(0);


    useEffect(() => {

        fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then(response => {
        return response.json()
        })
        .then (response => setBlue(response.venta))
        .catch(error => {
            setBlue(300)})
    },[]) */
    ///////////////////////////////

    return (
        <li key={id}>
            <h1 className="tituloDetalles">Detalles del Producto</h1>
                    <div className="cards2">
                        <div>
                        <img className="imagenProduct" src={img} alt="" />
                        </div>
                        <div className="cardsDescription">
                            <h1>{name.toUpperCase()}</h1>
                            <h3>Descripcion: {description}</h3>
                            <h3>{montaje}</h3>
                            <h3>{medidas}</h3>
                            <h4>Precio: $ {price}</h4>
                            <h3>Stock disponible: {stock} unidades</h3>
                            <>
                            { quantity > 0 ? <Link to="/cart" className="button-78"  style={{margin: "15px auto"}}>Ir al CARRITO</Link> : <Counter stock={stock}  onAdd={handleOnAdd} initial={quantityAdded}/>}
                            </>
                        </div>
                        <div>
                        </div>
                    </div>
        </li>
    )
}

export default ItemDetail
