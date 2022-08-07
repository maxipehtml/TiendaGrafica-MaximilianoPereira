import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { data } from "../Navbar/DataNavbar";
import { Fragment } from "react";

console.log(data);

const Navbar = () => {
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
                    {data.map(data => (
                        <Fragment key={data.category}>
                        <Link to={data.url} className="button-78">
                        {data.category}
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
