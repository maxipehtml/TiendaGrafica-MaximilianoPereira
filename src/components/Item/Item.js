import './Item.css'
import { useState, useEffect } from "react";


const Item = ({ producte }) => {

    //Fetch a DolarApi///////////////////
    const [dolarblue, setBlue] = useState(0);
   // const [dolarliqui, setLiqui] = useState(0);

    useEffect(() => {

        fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then(response => {
        return response.json()
        })
        .then (response => setBlue(response.venta))
    },[])

/*     useEffect(() => {

        fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then(response => {
           return response.json()
        })
        .then (response => setLiqui(response.venta))
    },[]) */
    ///////////////////////////////

    return (
        <li key={producte.id}>
                    <div className="cards1">
                        <h1>{producte.name.toUpperCase()}</h1>
                        <img className="imagenProduct" src={producte.img} alt="" />
                        
                        <button className='button-78'>Ver Detalles</button>
                        <h2>$ {producte.price*dolarblue}</h2>
                        <h3>Stock: {producte.stock}</h3>
                    </div>
        </li>

    )
}

export default Item
