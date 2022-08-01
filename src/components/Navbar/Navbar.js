import './Navbar.css';
/* import logo from 'img/logo.png'; */
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <h1>TIENDA</h1>
            </div>
            
            <div className='navbar-inner'>
                <button className='button-78'>CUADROS</button>
                <button className='button-78'>JOYAS</button>
                <button className='button-78'>SERVICIOS</button>
            </div>
            <CartWidget/>
            <div>
                <img src='img/logo.png' alt='logo' />
            </div>
            
        </nav>
    )
}

export default Navbar;