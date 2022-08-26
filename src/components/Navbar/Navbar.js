import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Fragment} from "react";
import { useState, useEffect } from "react";
import { getDocs,  collection } from "firebase/firestore";
import { database } from "../../services/firebase/index";

const Navbar = () => {

    const [tabs, setTabs] = useState([]);


    useEffect(() => {
        const refData = collection(database, "tabs");
        const referenciaCollection = refData

        getDocs(referenciaCollection)
            .then((response) => {
                const tabs = response.docs.map((docu) => {
                    //const values = docu.data()
                    console.log(docu.data);
                    return { ...docu.data() };
                });
                console.log(tabs);
                setTabs(tabs);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {

            });

    }, []);

    console.log(tabs);

    return (
        <div className="App-header">
            <nav className="navbar">
                <div>
                    <Link to="/" className="button-63">
                        TIENDA
                    </Link>
                </div>
                <div  className="navbar-inner">
                    <>
                    {tabs.map(data => (
                        <Fragment key={data.category}>
                        <Link to={("/category/" + data.category)} className="button-78">
                        {(data.category.toUpperCase())}
                        </Link>
                        </Fragment>
                    ))}
                    </>

                </div>
                <CartWidget />
                <div>
                    <Link to="/">
                        <img src="img/logo.png" alt="logo" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
