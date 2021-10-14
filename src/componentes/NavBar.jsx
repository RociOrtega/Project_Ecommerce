import "boxicons";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="brand">
                <box-icon name='beer' type='solid' flip='horizontal' color='#d0a70a' ></box-icon>
                <NavLink className="menuItem" to="/">De Revuelta</NavLink>
            </div>
            <NavLink className="menuItem" to="/">Productos</NavLink>
            <NavLink className="menuItem" to="/categoria/1">Cervezas</NavLink>
            <NavLink className="menuItem" to="/categoria/2">Accesorios</NavLink>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;