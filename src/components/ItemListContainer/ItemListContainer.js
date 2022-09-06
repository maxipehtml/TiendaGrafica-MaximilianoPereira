import { useState, useEffect } from "react";
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


    }, [categoryId]);

    if (loading) {
        return <div className="lds-hourglass"></div>;
    }

    return (
        <>
            <h1 className="tituloTienda">
                {props.greeting} {(categoryId?.toUpperCase())}
            </h1>
            <ItemList products={products} />
            <>
            { products.length === 0 ? <button onClick={uploadProducts} className="button-78 btn-confirmar btns-cart" >Añadir Productos</button> : null}</>
        </>
    );
};

export default ItemListContainer;
