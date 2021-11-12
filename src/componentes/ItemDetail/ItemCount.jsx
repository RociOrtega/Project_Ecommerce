import {useState} from 'react';
import "boxicons";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)
    const [estadoBoton, setEstadoBoton] = useState(false)
    const boton = () => {
        setEstadoBoton(true)
        setTimeout(() => {setEstadoBoton(false)}, 800)
    }  
    const aumentar = () => {
        if(contador < stock){
            setContador(contador + 1)
        } 
    }
    const restar = () => {
        if(contador > initial)
        setContador(contador - 1)
    }
    const confirmarCantidad = () => {
        onAdd(contador)
        boton()
    }

    return(
        <>
            <article className="itemCount">
                <div className="contador">
                    <button className="btnMasMenos" onClick={restar}><box-icon name='minus'></box-icon></button>
                    <span>{contador}</span>
                    <button className="btnMasMenos" onClick={aumentar}><box-icon name='plus'></box-icon></button>
                </div>
                <button className="btn-agregarCarrito" onClick={confirmarCantidad}>Agregar</button>
            </article>
            {(estadoBoton ? <div className="alerta">Se agregó al carrito</div> : null)}
        </>
    )
}

export default ItemCount;