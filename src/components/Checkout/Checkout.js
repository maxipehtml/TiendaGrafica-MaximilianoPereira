import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
    addDoc,
    collection,
    Timestamp,
    query,
    where,
    getDocs,
    documentId,
    writeBatch,
} from "firebase/firestore";
import { database } from "../../services/firebase";
import NotificationContext from "../../notifications/Notification";

const Checkout = () => {

    const { clearCart, getTotal, cart } = useContext(CartContext);
    const {setNotification} = useContext(NotificationContext)

    const total = getTotal();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


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

    }

    return (
        <div>
            <h1>Checkout</h1>
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
            <button
                    disabled={ email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf("") === -1 }
                    onClick={createBuy}
                    className="button-78 btn-confirmar btns-cart"
                >
                    Confimar Compra
                </button>
        </div>
    )
}

export default Checkout