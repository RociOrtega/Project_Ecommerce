import React, { createContext, useState } from 'react'

export const CartContext= createContext();

const CartProvider=(props)=>{

    const [carrito, setCarrito] = useState([]);
    //Para agregar solo necesitamos carrito
    //Para eliminar necesitamos setCarrito
    //const [existeProducto, setExisteProducto] = useState(false);

    return (
        <CartContext.Provider value={[carrito,setCarrito]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;