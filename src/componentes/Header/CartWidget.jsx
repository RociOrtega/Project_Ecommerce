import "boxicons";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { carrito, totalItems} = useContext(CartContext)
    return(
        (carrito.length > 0 ) ? 
        (<>
            <box-icon name='cart' flip='horizontal' color='#ffffff'></box-icon>
            <span className="numeroItems">{totalItems}</span>
        </>) : 
        (<></>) 
    )
}

export default CartWidget;