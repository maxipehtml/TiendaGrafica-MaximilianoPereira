import { useState,useEffect } from 'react'
import { getProductsByID } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = ({addItem}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    console.log(productId);
   
    useEffect(() =>{
        getProductsByID(productId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        },[productId])

    if(loading){
        return <h2>Cargando Detalles!</h2>
    }
    return (
    <>
        <ItemDetail {...products} addItem={addItem} />
    </>
    )
}

export default ItemDetailContainer