import { useState, useEffect } from "react";
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { getDolar } from '../ValorDolar/ValorDolar';

/* import ValorDolar from '../ValorDolar/ValorDolar'; */



console.log(getDolar);

const ItemDetail = ({ products }) => {

    const handleOnAdd = (quantity) => {
        console.log('Agregaste '+quantity+' items al carrito');    
    }
/////////////
    const [dolarblue, setBlue] = useState(0);

    useEffect(() => {

        fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then(response => {
        return response.json()
        })
        .then (response => setBlue(response.venta))
        .catch(error => {
            setBlue(300)})
    },[])
    ///////////////////////////////

    return (
        <li key={products.id}>
            <h1 className="tituloDetalles">Detalles del Producto</h1>
                    <div className="cards2">
                        <div>
                        <img className="imagenProduct" src={products.img} alt="" />
                        </div>
                        <div className="cardsDescription">
                            <h1>{products.name.toUpperCase()}</h1>
                            <h3>Descripcion: {products.description}</h3>
                            <h3>{products.montaje}</h3>
                            <h3>{products.medidas}</h3>
                            <h4>Precio: $ {(products.price*dolarblue).toFixed()}</h4>
                            <h3>Stock disponible: {products.stock} unidades</h3>
                            <Counter stock={products.stock} initial={0} onAdd={handleOnAdd}/>
                        </div>
                        <div>
                        </div>
                    </div>
        </li>
    )
}

export default ItemDetail
