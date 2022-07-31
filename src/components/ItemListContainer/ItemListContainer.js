import { useState,useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        },[])

    if(loading){
        return <h2>Cargando Productos !!!</h2>
    }

    return (
    <>
        <h1>
            {props.greeting}
        </h1>
        <ItemList products={products}/>

    </>

    )

}

export default ItemListContainer