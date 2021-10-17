import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
    const {carrito, removeItem, clear, totalCompra, total} = useContext(CartContext);

    function montoTotal(){
        totalCompra()
    }
    

    return(
        <section>
            <h1>Hola! Este es el carrito de compras</h1>
            <div className="itemList">
                {carrito.map((item, index) => {
                    return (
                        <div    className="tarjetaCarrito" key={index}>
                            <h3 className="tarjetaCarritoTitulo">{item.title}</h3>
                            <img className="tarjetaCarritoImg" src={item.img} alt="" width="200px" height="auto"/>
                            <p>Cantidad: {item.cantidadProd}</p>
                            <p className="tarjetaCarritoPrecio">Sub-total: ${item.price * item.cantidadProd}</p>
                            <button onClick={() => {removeItem(index)}}>Eliminar producto</button>
                        </div>
                    )
                })}
            </div>
            <br/>
            <h3>Total: {total}</h3>
            <br/>
            <button onClick={clear}>Vaciar carrito</button>
        </section>
    )
}

export default Cart;