import "boxicons";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

const Header = () => {
    return (
        <BrowserRouter>
            <header>
                <NavBar/>
                <div className="logoHeader"> 
                    <h1 className="tituloHeader">Cervezas De ReVuelta</h1>
                </div> 
            </header>
        </BrowserRouter>
    );
}

export default Header;