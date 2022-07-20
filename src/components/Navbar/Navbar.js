import './Navbar.css';
import logo from '../img/logo.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
                        <div>
                <h1>TIENDA</h1>
            </div>



            <div className='navbar-inner'>
                <button>CUADROS</button>
                <button>JOYAS</button>
                <button>OTROS</button>
            </div>
            <div>
                <img src={logo} alt='logo' />
            </div>

        </nav>
    )
}

export default Navbar;