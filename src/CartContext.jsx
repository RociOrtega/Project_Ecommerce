import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const CartProvider=({children})=>{

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    function isInCart(id){
        const memoriaCarrito = carrito
        const existeEnElCarro = memoriaCarrito.find((item) => item.id === id)
        if(existeEnElCarro == undefined){
            return 0
        }else{
            return 1
        }
    }

    function addItem(productos, cantidad){
        const memoriaCarrito = carrito
        const producto = {
            id: productos.id, 
            title: productos.title, 
            img: productos.thumbnail,
            price: productos.price,
            cantidadProd: cantidad
        };
        const estaEnCarro = isInCart(producto.id)
        if(estaEnCarro === 0){
            memoriaCarrito.push(producto);
            setCarrito(memoriaCarrito)
        }else if(estaEnCarro === 1){
            //
        }
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

    const valorContexto = {
        carrito,
        addItem,
        removeItem,
        clear,
        totalCompra,
        total
    }

    return (
        <CartContext.Provider value={valorContexto}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;