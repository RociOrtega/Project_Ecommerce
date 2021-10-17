import {useState} from 'react';
import "boxicons";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)
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
    }

    return(
        <article>
            <span className="tarjetaStock">Quedan {stock} productos</span> 
            <div className="contador">
                <button className="btnMasMenos" onClick={restar}><box-icon name='minus'></box-icon></button>
                <span>{contador}</span>
                <button className="btnMasMenos" onClick={aumentar}><box-icon name='plus'></box-icon></button>
            </div>
            <button className="btn-agregarCarrito" onClick={confirmarCantidad}>Comprar</button>
        </article>
    )
}

export default ItemCount;