import "boxicons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="brand">
                <box-icon name='beer' type='solid' flip='horizontal' color='#d0a70a' ></box-icon>
                <Link className="menuItem" to="/">De Revuelta</Link>
            </div>
            <Link className="menuItem" to="/">Productos</Link>
            <Link className="menuItem" to="/categoria/1">Cervezas</Link>
            <Link className="menuItem" to="/categoria/2">Accesorios</Link>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;