import React, { useContext } from 'react';
import { CartContext } from "../../CartContext";

const ItemCarrito = () => {
    const { removeItem, carrito } = useContext(CartContext);
    return (
        <>
            <ul className="tarjetaCarritoEncabezado">
                <li className="tarjetaCarritoTitulo">Eliminar</li>
                <li className="tarjetaCarritoTitulo">Imágen</li>
                <li className="tarjetaCarritoTitulo">Producto</li>
                <li className="tarjetaCarritoTitulo">Precio</li>
                <li className="tarjetaCarritoTitulo">Cantidad</li>
                <li className="tarjetaCarritoTitulo">Subtotal</li>
            </ul>
            {carrito.map((item, index) => {
            return (
            <div className="tarjetaCarrito" key={index}>
                <button className="btn-removeItem" onClick={() => {removeItem(index, item.cantidadProd)}}><box-icon name='x' size='5vh'></box-icon></button>
                <img className="tarjetaCarritoImg" src={item.img} alt="" width="200px" height="auto"/>
                <h3 className="tarjetaCarritoTitulo">{item.title}</h3>
                <p className="tarjetaCarritoPrecio">${item.price}</p>  
                <p className="tarjetaCarritoCantidad">{item.cantidadProd} ud.</p>
                <p className="tarjetaCarritoPrecio">${item.price * item.cantidadProd}</p>      
            </div>
            )
            })}
        </>
    )
}

export default ItemCarrito;