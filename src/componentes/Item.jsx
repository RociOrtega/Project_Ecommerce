import { Route} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({title, price, imgUrl, description}) => {
    return(
        <div className="tarjeta">
            <img src={imgUrl} alt="" width="100%" height="200px"/>
            <h3 className="tarjetaTitulo">{title}</h3>
            <p className="tarjetaDescripcion">{description}</p>
            <p className="tarjetaPrecio">${price}</p>
            <button className="tarjetaBoton">
                <Route path="/item/:id" component={ItemDetailContainer}/>
                Ver más
            </button>
        </div>
    )
}

export default Item;