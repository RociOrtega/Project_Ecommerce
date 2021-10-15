import React, { createContext, useState } from 'react'

export const CartContext= createContext();

const CartProvider=(props)=>{

    const [carrito, setCarrito] = useState([]);

    return (
        <CartContext.Provider value={[carrito,setCarrito]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;