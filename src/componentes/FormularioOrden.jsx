import { CartContext } from "../CartContext";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";

const FormularioOrden = ({ordenCompra}) => {
    const {confirmarMensaje, setConfirmarMensaje, resetConfirmarMensaje} = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');

    function validarCorreo(correo) {
        const simbolos = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return simbolos.test(String(correo).toLowerCase())
    }

    function validarFormulario() {
        if(nombre === '' || apellido === '' || correo === '') {
            setConfirmarMensaje('Todos los campos son obligatorios');
            return false;
        }else {
            setNombre('');
            setApellido('');
            setCorreo('');
        }
        if(!validarCorreo(correo)) {
            setConfirmarMensaje('El correo ingresado no es valido');
            return false;
        }else{
            setCorreo('');
        }
        return true;
    }

    function enviarOrden() {
        if(validarFormulario()) {
            ordenCompra({nombre, apellido, correo});
        }
    }

    return (
        <form className="form">
        
            <h3>Información personal:</h3>

            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" onChange={ e => setNombre(e.target.value)} required maxLength="50"/>
            </div>

            <div>
                <label htmlFor="name">Apellido:</label>
                <input type="text" name="name" id="name" onChange={ e => setApellido(e.target.value)} required maxLength="50"/>
            </div>
        
            <div>
                <label htmlFor="phone">Correo electrónico:</label>
                <input type="text" name="phone" id="phone" onChange={ e => setCorreo(e.target.value)} required maxLength="50"/>
            </div>
            <button onClick={enviarOrden}>Enviar orden de compra</button>
    </form>
    )
}
export default FormularioOrden;