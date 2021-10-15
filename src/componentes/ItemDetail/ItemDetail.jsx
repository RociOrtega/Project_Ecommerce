import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
//import { Link } from "react-router-dom";

const ItemDetail = ({detalle}) => {
    const [cantidad, setCantidad] = useState([])
    const onAdd = (cantidadProductos) => {
        setCantidad(cantidadProductos)
    } 
    const [carrito, setCarrito] = useContext(CartContext)

    function agregar(){
        const producto = {
            id: detalle.id, 
            title: detalle.title, 
            img: detalle.thumbnail,
            price: detalle.price, 
            cantidad: cantidad
        };
        const memoriaCarrito = carrito;
        memoriaCarrito.push(producto);
        setCarrito(memoriaCarrito);
        console.log(carrito);
    }
    
    return(
        <article className="tarjetaDetalle">
            <img className="tarjetaDetalleImg" src={detalle.thumbnail} alt="" width="100%" height="350px"/>
            <div className="tarjetaDetalleDatos">
                <h3 className="tarjetaTitulo">{detalle.title}</h3>
                <h4 className="tarjetaPrecio">${detalle.price}</h4>
                <p className="tarjetaDescripcion">{detalle.description}</p>
                <ItemCount stock={detalle.stock} initial={1} onAdd = {onAdd} agregar = {agregar}/> 
                <button hidden={cantidad >=1 ? false : true}>Terminar mi compra</button>
            </div>
        </article>
    )
}

export default ItemDetail;