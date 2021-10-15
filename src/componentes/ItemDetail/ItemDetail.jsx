import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({detalle}) => {
    const [cantidad, setCantidad] = useState([])
    const onAdd = (cantidadProductos) => {
        setCantidad(cantidadProductos)
    }
    
    return(
        <article className="tarjetaDetalle">
            <img className="tarjetaDetalleImg" src={detalle.thumbnail} alt="" width="100%" height="350px"/>
            <div className="tarjetaDetalleDatos">
                <h3 className="tarjetaTitulo">{detalle.title}</h3>
                <h4 className="tarjetaPrecio">${detalle.price}</h4>
                <p className="tarjetaDescripcion">{detalle.description}</p>
                <ItemCount stock={detalle.stock} initial={1} onAdd = {onAdd}/> 
                <button hidden={cantidad >=1 ? false : true}><Link to="/cart/">Terminar mi compra</Link></button>
            </div>
        </article>
    )
}

export default ItemDetail;