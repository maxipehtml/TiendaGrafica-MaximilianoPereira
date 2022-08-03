import './Item.css'
import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';


const Item = ({ producte }) => {

    //Fetch a DolarApi///////////////////
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
        
                    <div className="cards1">
                        <h1>{producte.name.toUpperCase()}</h1>
                        <img className="imagenProduct0" src={producte.img} alt="" />
                        
                        <Link to={`/detail/${producte.id}`} className='button-78'>Ver Detalles</Link>
                        <h2>$ {producte.price*dolarblue}</h2>
                        <h3>Stock: {producte.stock}</h3>
                    </div>
        

    )
}

export default Item
