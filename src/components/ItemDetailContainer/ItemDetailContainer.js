import { useState,useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams} from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { database } from '../../services/firebase/index.js'

const ItemDetailContainer = ({addItem}) => {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    console.log(productId);
   
    useEffect(() =>{

        getDoc(doc(database, 'products', productId)).then(response => {
            //console.log(response);
            const product = {id: response.id, ...response.data()}
            setProducts(product)
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
        <ItemDetail {...product} addItem={addItem} />
    </>
    )
}

export default ItemDetailContainer