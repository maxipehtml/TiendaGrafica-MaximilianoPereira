import { useState, useEffect } from "react";
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getDocs, addDoc, collection, query, where } from "firebase/firestore";
import { database } from "../../services/firebase/index";
import { getProducts } from "../../asyncMock";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    /* const category = categoryId.toUpperCase(); */
    const uploadProducts = () => {
        console.log(getProducts());
        getProducts().then((response) =>
            response.forEach((element) =>
                addDoc(collection(database, "products"), element).then((response) => {
                    console.log(response);
                    document.location.reload(true);
                })
            )
        );
    };

    useEffect(() => {
        const refData = collection(database, "products");
        const referenciaCollection = !categoryId
            ? refData
            : query(refData, where("category", "==", categoryId));

        getDocs(referenciaCollection)
            .then((response) => {
                const products = response.docs.map((docu) => {
                    //const values = docu.data()
                    console.log(docu.data);
                    return { id: docu.id, ...docu.data() };
                });
                console.log(products);
                setProducts(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        /*         const dualFunction = categoryId ? getProductsByCategory : getProducts;
    
            
            dualFunction(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })  */
    }, [categoryId]);

    if (loading) {
        return <h2>Cargando Productos !!!</h2>;
    }

    return (
        <>
            <h1 className="tituloTienda">
                {props.greeting} {(categoryId?.toUpperCase())}
            </h1>
            <ItemList products={products} />
            <button
                disabled={products.length > 0}
                onClick={uploadProducts}
                className="button-78 btn-confirmar btns-cart"
            >
                ADD PROD
            </button>
        </>
    );
};

export default ItemListContainer;
