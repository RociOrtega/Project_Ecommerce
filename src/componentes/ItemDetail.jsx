import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) => {
    return(
        <article className="tarjetaDetalle">
            <img className="tarjetaDetalleImg" src={detalle.thumbnail} alt="" width="100%" height="350px"/>
            <div className="tarjetaDetalleDatos">
                <h3 className="tarjetaTitulo">{detalle.title}</h3>
                <h4 className="tarjetaPrecio">${detalle.price}</h4>
                <p className="tarjetaDescripcion">{detalle.description}</p>
                <ItemCount stock={detalle.stock} initial="1"/> 
                <button className="btn-agregarCarrito">Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail;