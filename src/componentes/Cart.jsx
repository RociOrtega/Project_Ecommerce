import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Cart() {
    const {carrito, removeItem, clear, totalCompra, total} = useContext(CartContext);

    useEffect(() => {
        totalCompra()
    })
    
    return(
        (carrito.length > 0 ) ? 
        (<section>
            <h1>Hola! Este es el carrito de compras</h1>
            <button><Link to="/">Seguir comprando</Link></button>
            <div className="itemList">
                {carrito.map((item, index) => {
                    return (
                        <div className="tarjetaCarrito" key={index}>
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
        </section>) : 
        (<section>
            <h1>Hola! Este es el carrito de compras</h1>
            <button><Link to="/">Seguir comprando</Link></button>
            <h3>El carrito está vacío</h3>
        </section>)
    )
}

export default Cart;



/*(carrito.length > 0 ) ? 
        (<section>
            <h1>Hola! Este es el carrito de compras</h1>
            <button><Link to="/">Seguir comprando</Link></button>
            <div className="itemList">
                {carrito.map((item, index) => {
                    return (
                        <div className="tarjetaCarrito" key={index}>
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
        </section>) : 
    (<h3>El carrito está vacío</h3>)*/