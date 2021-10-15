import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    //Para agregar solo necesitamos carrito
    //Para eliminar necesitamos setCarrito
    const [carrito] = useContext(CartContext);

    {carrito.map((item, index) => {
        return(
            <ul key={index}>
                <img src={item.thumbnail} alt="" width="100px"/>
                <li>{item.title}</li>
                <li>{item.price}</li>
            </ul>    
        )
    })}
}

export default Cart;