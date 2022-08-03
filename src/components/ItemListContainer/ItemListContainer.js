import { useState,useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() =>{

        const dualFunction = categoryId ? getProductsByCategory : getProducts;

        
        dualFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        }) 
    }, [categoryId]);


    if(loading){
        return <h2>Cargando Productos !!!</h2>
    }

    return (
    <>

        <h1 className='tituloTienda'>
            {props.greeting}
        </h1>
        <ItemList products={products}/>

    </>

    )

}

export default ItemListContainer