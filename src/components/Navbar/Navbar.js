import './Navbar.css';
/* import logo from 'img/logo.png'; */
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="App-header">
                <nav className='navbar'>
            <div>
                <Link to='/' className='button-63'>TIENDA</Link>
            </div>
            
            <div className='navbar-inner'>

                <Link to='/category/cuadros' className='button-78'>CUADROS</Link>
                <button className='button-78'>JOYAS</button>
                <button className='button-78'>SERVICIOS</button>
            </div>
            <CartWidget/>
            <div>
            <Link to='/'><img src='img/logo.png' alt='logo' /></Link>
                
            </div>
            
        </nav> 
        </div>

    )
}

export default Navbar;