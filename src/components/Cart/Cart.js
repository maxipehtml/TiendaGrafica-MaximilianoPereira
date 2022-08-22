import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./CartProduct";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Cart.css";
import {
    addDoc,
    collection,
    Timestamp,
    updateDoc,
    doc,
    query,
    where,
    getDocs,
    documentId,
    writeBatch,
} from "firebase/firestore";
import { database } from "../../services/firebase";
import { getProducts } from "../../asyncMock";
import Form from "../../components/Form/Form";
import NotificationContext from "../../notifications/Notification";

const Cart = () => {
    const { getQuantity, clearCart, getTotal, cart } = useContext(CartContext);
    const {setNotification} = useContext(NotificationContext)

    const cantidadTotal = getQuantity();
    const total = getTotal();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let noProd = cantidadTotal === 0;


    const createBuy = async () => {
        try {
            const buy = {
                buyer: {
                    name: name,
                    email: email,
                },
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total,
            };
            console.log(buy);

            const idCart = cart.map((p) => p.id);
            console.log(idCart);
            const prodAddFromFirestore = await getDocs(
                query(
                    collection(database, "products"),
                    where(documentId(), "in", idCart)
                )
            );
            console.log(prodAddFromFirestore);

            const { docs } = prodAddFromFirestore;

            const batch = writeBatch(database);

            const noStock = [];

        
            
    
        

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDatabase = dataDoc.stock;

                const prodAdded = cart.find((prod) => prod.id === doc.id);
                const prodQuant = prodAdded?.quantity;

                if (stockDatabase >= prodQuant) {
                    batch.update(doc.ref, { stock: stockDatabase - prodQuant });
                    setNotification(`Enviamos los datos para el pago de los productos a ${email}`, 'success',5)
                } else {
                    console.log("no hay stock");
                    setNotification(`Nos quedamos sin stock :'(`, 'error',10)
                    noStock.push({ id: doc.id, ...dataDoc });
                }
            });
            if (noStock.length === 0) {
                const salesRef = collection(database, "sales");
                const salesAdd = await addDoc(salesRef, buy);
                
                batch.commit();
                console.log(salesAdd.id);
                
                clearCart();
            } else {
                console.log("no hay stock de algunos prod");
            }
        } catch (e) {
            console.log(e);
        } finally {
            
            console.log("final compra");
        }

        /*     addDoc(collection(database, 'sales'), buy).then(response =>{
            console.log(response);
        }) */
    };

    if (noProd) {
        return (
            <div className="carritoCompras">
                <h2>Agrega productos al carrito</h2>
                <ItemListContainer greeting="Te sugerimos los siguientes productos :" />
            </div>
        );
    }

    return (
        <div className="carritoCompras">
            <h1>Carrito de Compras</h1>
            {cart.map((prod) => (
                <CartProduct key={prod.id} {...prod} />
            ))}
            <h2>Total: U$DT {total}</h2>
            <form className="form">
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>
                <h4>
                    IMPORTANTE: Asegura poner correctamente los datos, recibirás un mail
                    con el numero de orden para efectuar el pago.
                </h4>
            </form>

            <div className="confirmarCarrito">

                <button
                    onClick={() => clearCart()}
                    className="button-78 vaciarCarrito btns-cart"
                >
                    Vaciar Carrito
                </button>
                <button
                    disabled={ email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf("") === -1 }
                    onClick={createBuy}
                    className="button-78 btn-confirmar btns-cart"
                >
                    Confimar Compra
                </button>

            </div>
            <ItemListContainer greeting="Segui comprando nuestros productos" />
        </div>
    );
};

export default Cart;

