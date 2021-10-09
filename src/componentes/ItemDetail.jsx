import ItemCount from "./ItemCount";

const ItemDetail = ({title, price, imgUrl, description, stock}) => {
    return(
        <div className="tarjetaDetalle">
            <img className="tarjetaDetalleImg" src={imgUrl} alt="" width="100%" height="350px"/>
            <div className="tarjetaDetalleDatos">
                <h3 className="tarjetaTitulo">{title}</h3>
                <h4 className="tarjetaPrecio">${price}</h4>
                <p className="tarjetaDescripcion">{description}</p>
                <ItemCount stock={stock} initial="1"/>
            </div>
        </div>
    )
}

export default ItemDetail;