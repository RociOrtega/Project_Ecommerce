import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import ItemCarrito from './ItemCarrito';
import FormularioOrden from './FormularioOrden';

const Cart = () => {
    const {carrito, clear, totalCompra, total, ordenCompra} = useContext(CartContext);
    const [estadoBoton, setEstadoBoton] = useState(false)

    useEffect(() => {
        totalCompra()
    })
    function activarForm(){
        setEstadoBoton(true)
    }
    
    return(
        <section className="cart">
            <Link to="/"><box-icon name='home' type='solid' color='#975600' size='7vh'></box-icon></Link>
            <h1 className="mainTitulo">Hola! Este es el carrito de compras</h1>
            {(carrito.length > 0) ? (<article className="cartList">
                <ItemCarrito/>
                <button className="btn-vaciarCarrito" onClick={clear}><box-icon name='trash' type='solid' color='#975600' size='5.5vh'></box-icon></button>
                <h3>Total del carrito: {total}</h3>
                <button className="btn-finalizar btn-finalizarTexto" onClick={activarForm}>Ir a pagar</button>
                {estadoBoton ? <FormularioOrden ordenCompra={ordenCompra}/> : null}
            </article>) : (<h3 className="estadoCarga">El carrito está vacío</h3>)}
        </section>
    )
}

export default Cart;