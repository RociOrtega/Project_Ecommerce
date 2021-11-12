import { Link } from "react-router-dom";
import ItemCount from "../ItemDetail/ItemCount";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

const Item = ({detalle}) => {
    const { addItem } = useContext(CartContext)

    function onAdd (cantidadProducto){
        addItem(detalle, cantidadProducto);
    } 

    return(
        <div className="tarjeta">
            <Link to = {`/item/${detalle.id}`} className="enlaceTarjeta">
                <img src={detalle.thumbnail} alt="" width="100%" height="200px"/>
                <h3 className="tarjetaTitulo">{detalle.title}</h3>
                <p className="tarjetaDescripcion">{detalle.description}</p>
                <p className="tarjetaPrecio">${detalle.price}</p>
            </Link>
            <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd}></ItemCount> 
        </div>
    )
}

export default Item;