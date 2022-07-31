import { useState,useEffect } from 'react'
import { getProductsByID } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.js'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProductsByID(2).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        },[])

    if(loading){
        return <h2>Cargando Detalles!</h2>
    }

    return (
    <>
        <ItemDetail products={products}/>

    </>

    )

}

export default ItemDetailContainer