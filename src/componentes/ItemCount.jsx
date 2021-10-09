import {useState} from 'react';
import "boxicons";

const ItemCount = ({stock, initial}) => {
    const [cantidad, setCantidad] = useState(parseInt(initial, 10));
    const aumentar = () => {
        if(cantidad >= stock){return} 
        setCantidad(cantidad + 1)
    };
    const restar = () => {
        if(cantidad <= parseInt(initial, 10)){return}
        setCantidad(cantidad - 1)
    };
    return(
        <div>
            <span className="tarjetaStock">Quedan {stock} productos</span> 
            <br/>
            <button className="btnMasMenos" onClick={restar}><box-icon name='minus'></box-icon></button>
            <span>{cantidad}</span>
            <button className="btnMasMenos" onClick={aumentar}><box-icon name='plus'></box-icon></button>
        </div>
    )
}

export default ItemCount;