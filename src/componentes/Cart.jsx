import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
//import ItemCarrito from './ItemCarrito';

function Cart() {
    const [carrito] = useContext(CartContext);

    return(
        <>
        <h1>Hola! Este es el carrito de compras</h1>
        <section className="itemList">
            {carrito.map((item, index) => {
                return(
                <ul key={index} className="tarjetaCarrito">
                    <li className="tarjetaCarritoTitulo">{item.title}</li>
                    <img className="tarjetaCarritoImg" src={item.img} alt="" width="200px" height="auto"/>
                    <li className="tarjetaCarritoPrecio">${item.price}</li>
                    <button>Eliminar</button>
                </ul>
            )
        })}
        </section>
        <button >Vaciar carrito</button>
        </>
    )
}

export default Cart;