const Item = ({title, price, imgUrl, description}) => {
    return(
        <div className="tarjeta">
            <img src={imgUrl} alt="" width="100%" height="200px"/>
            <h3 className="tarjetaTitulo">{title}</h3>
            <p className="tarjetaDescripcion">{description}</p>
            <p className="tarjetaPrecio">${price}</p>
            <button className="tarjetaBoton">
                Ver más
            </button>
        </div>
    )
}

export default Item;