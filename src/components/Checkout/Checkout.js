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
    const { setNotification } = useContext(NotificationContext)

    const total = getTotal();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [showId, setShowid] = useState("");

    const [compraId, setCompraId] = useState("false");

    if (compraId === true) {
        return <>
            <div className="checkout">
                <h1>Gracias por Confirmar su compra</h1>
                <h1> Su Id de compra es "{showId}"</h1>
                <h4>Hemos enviado un mail a su correo con los pasos a seguir</h4>
            </div>

        </>
    }

/*     const mandarRecibo = () => {
        console.log(mailReg.value);
        emailjs.send("service_dwm6j8j","template_6fqxvyr",{
          from_name: nameReg.value,
          emailLogin: mailReg.value,
          total: totaldeCompra.toString(),
        });
      } */

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
                    setNotification(`Enviamos los datos para el pago de los productos a ${email}`, 'success', 5)
                } else {
                    console.log("no hay stock");
                    setNotification(`Nos quedamos sin stock :'(`, 'error', 10)
                    noStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (noStock.length === 0) {
                const salesRef = collection(database, "sales");
                const salesAdd = await addDoc(salesRef, buy);

                batch.commit();
                setShowid(salesAdd.id);
                console.log(salesAdd.id);
                setCompraId(true);

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
        <div className="checkout">
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
                disabled={email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf("") === -1}
                onClick={createBuy}
                className="button-78 btn-confirmar btns-cart"
            >
                Confimar Compra
            </button>
        </div>
    )
}

export default Checkout