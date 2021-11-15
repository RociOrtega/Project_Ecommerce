import { CartContext } from "../../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const OrdenDeCompra = () => {
    const { clear, confirmarMensaje, resetConfirmarMensaje } = useContext(CartContext);

    function resetear() {
        clear();
        resetConfirmarMensaje();
    }

    return (
        <section>
            <Link to="/" onClick={resetear}><box-icon name='home' type='solid' color='#975600' size='7vh'></box-icon></Link>
            <h3>Hola, tu compra ha sido realizada con éxito!</h3>
            <h4>{confirmarMensaje}</h4>
            <Link to="/" onClick={resetear}><box-icon name='left-arrow-alt'></box-icon>Volver al inicio</Link>
        </section>
    )
}

export default OrdenDeCompra;