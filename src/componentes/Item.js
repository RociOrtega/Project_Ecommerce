import ItemCount from "./ItemCount";

const Item = ({title, price, imgUrl, description}) => {
    return(
        <div className="tarjeta">
            <img src={imgUrl} alt="" width="100%" height="200px"/>
            <h3>{title}</h3>
            <ItemCount stock="10" initial="1"/>
            <p>{description}</p>
            <p>${price}</p>
            <button>Ver más</button>
        </div>
    )
}

export default Item;