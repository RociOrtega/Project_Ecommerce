import React, { createContext, useState } from 'react'
import { firestore } from './componentes/firebase';
import firebase from 'firebase';

export const CartContext = createContext();

const CartProvider=({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [confirmarMensaje, setConfirmarMensaje] = useState('');
    
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
        }else if(estaEnCarro === 1){
            const existeEnElCarro = memoriaCarrito.find((item) => item.id === producto.id)
            existeEnElCarro.cantidadProd += producto.cantidadProd
        }
        setCarrito(memoriaCarrito)
        setTotalItems(totalItems + producto.cantidadProd)
    }


    function removeItem(itemId, cantidad){
        const memoriaCarrito = carrito;
        memoriaCarrito.splice(itemId, 1);
        setCarrito(memoriaCarrito);
        totalCompra();
        setTotalItems(totalItems - cantidad)
    }

    function clear(){
        setCarrito([]);
        setTotal(0);
        setTotalItems(0);
    }

    function totalCompra(){
        let valorTotal = 0;
        carrito.forEach((producto) => {
            valorTotal = valorTotal + (producto.price * producto.cantidadProd)
        });
        setTotal(valorTotal);
    }

    function resetConfirmarMensaje(){
        setConfirmarMensaje('');
    }

    function ordenCompra(comprador){
        const orden = {
            comprador: {nombre: comprador.nombre, apellido: comprador.apellido, correo: comprador.correo, telefono: comprador.telefono},
            productos: carrito,
            date: firebase.firestore.Timestamp.now(),
            total: total
        }
        const db = firestore;
        const collection = db.collection('ordenes');
        const query = collection.add(orden);

        query
        .then((result) => {
            setConfirmarMensaje(`Tu número de orden es: ${result.id}`);
        })
        .catch((err) => {
            setConfirmarMensaje(`Ha ocurrido un error al procesar tu pedido, por favor inténtalo más tarde.`);
        })
    }

    const valorContexto = {
        carrito,
        addItem,
        removeItem,
        clear,
        totalCompra,
        total,
        totalItems,
        resetConfirmarMensaje,
        ordenCompra,
        confirmarMensaje
    }

    return (
        <CartContext.Provider value={valorContexto}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;