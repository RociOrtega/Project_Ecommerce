import "boxicons";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navBar">
            <a href="#">
                <box-icon name='beer' type='solid' flip='horizontal' color='#d0a70a' ></box-icon>
                De ReVuelta
            </a>
            <a href="#" className="menuItem">Quiénes somos</a>
            <a href="#" className="menuItem">Productos</a>
            <a href="#" className="menuItem">Contacto</a>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;