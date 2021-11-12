import "boxicons";
import NavBar from "./NavBar";

const Header = () => {
    return ( 
        <header>
            <NavBar/>
            <br/>
            <div className="logoHeader"> 
                <h1 className="tituloHeader">Cervezas De ReVuelta</h1>
            </div> 
        </header>
    );
}

export default Header;