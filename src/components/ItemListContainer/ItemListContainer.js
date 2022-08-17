import { useState,useEffect } from 'react'
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { database } from '../../services/firebase/index'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    /* const category = categoryId.toUpperCase(); */

    useEffect(() =>{
        const refData = collection(database, 'products')
        const referenciaCollection = !categoryId ? refData : query(refData, where('category', '==', categoryId))

        getDocs( referenciaCollection ).then(response => {
            
            const products = response.docs.map(docu => {
                //const values = docu.data()
                //console.log(values);
                return { id: docu.id, ...docu.data()}
            })
            console.log(products);
            setProducts(products);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })

/*         const dualFunction = categoryId ? getProductsByCategory : getProducts;

        
        dualFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  */


    }, [categoryId]);


    if(loading){
        return <h2>Cargando Productos !!!</h2>
    }

    return (
    <>

        <h1 className='tituloTienda'>
            {props.greeting} {categoryId}
        </h1>
        <ItemList products={products}/>

    </>

    )

}

export default ItemListContainer