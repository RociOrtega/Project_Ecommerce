import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider=({children})=>{

    const [carrito, setCarrito] = useState([]);
    const [existeProducto, setExisteProducto] = useState(false);
    const [total, setTotal] = useState(0);

    function addItem(productos, cantidad){
        const producto = {
            id: productos.id, 
            title: productos.title, 
            img: productos.thumbnail,
            price: productos.price,
            cantidadProd: cantidad
        };
        const memoriaCarrito = carrito;
        memoriaCarrito.push(producto);
        setCarrito(memoriaCarrito);
    }

    function removeItem(itemId){
        const memoriaCarrito = carrito;
        memoriaCarrito.splice(itemId, 1);
        setCarrito(memoriaCarrito);
        totalCompra();
    }

    function clear(){
        setCarrito([]);
        setTotal(0);
    }

    function totalCompra(){
        let valorTotal = 0;
        carrito.forEach((producto) => {
            valorTotal = valorTotal + (producto.price * producto.cantidadProd)
        });
        setTotal(valorTotal);
    }

    //function isInCart(){}

    const valorContexto = {
        carrito,
        addItem,
        removeItem,
        clear,
        totalCompra,
        total
        //isInCart
    }

    return (
        <CartContext.Provider value={valorContexto}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;