import { Link } from "react-router-dom";

const Item = ({title, price, imgUrl, description, id}) => {
    return(
        <div className="tarjeta">
            <img src={imgUrl} alt="" width="100%" height="200px"/>
            <h3 className="tarjetaTitulo">{title}</h3>
            <p className="tarjetaDescripcion">{description}</p>
            <p className="tarjetaPrecio">${price}</p>
            <button className="tarjetaBoton">
                <Link to = {`/item/${id}`} className="tarjetaBotonTexto">
                    Ver más
                </Link>
            </button>
        </div>
    )
}

export default Item;