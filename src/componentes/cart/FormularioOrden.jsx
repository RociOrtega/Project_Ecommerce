import { CartContext } from '../../CartContext';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";

const FormularioOrden = ({ordenCompra}) => {
    const {confirmarMensaje, clear} = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

    const [mensajeValidacion, setMensajeValidacion] = useState('');
    const [mensajeValidacionCorreo, setMensajeValidacionCorreo] = useState('');

    function validarCorreo(correo) {
        const expReg = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const resultado = expReg.test(correo);
        return resultado;
    }

    function validarFormulario() {
        if(nombre === '' || apellido === '' || correo === '' || telefono === '') {
            setMensajeValidacion('Todos los campos son obligatorios');
        }else {
            setMensajeValidacion('');
        }if(!validarCorreo(correo)) {
            setMensajeValidacionCorreo('El correo ingresado no es valido');
        }else {
            setMensajeValidacionCorreo('');
        }
    }

    function enviarFormulario() {
        validarFormulario();
        if(nombre !== '' && apellido !== '' && telefono !== '' && validarCorreo(correo)){
            ordenCompra({nombre, apellido, telefono, correo});
        }
    }

    return (
        <div className="form">
        
            <h3>Información de contacto:</h3>

            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" onChange={ e => setNombre(e.target.value)} required maxLength="50"/>
            </div>

            <div>
                <label htmlFor="lastName">Apellido:</label>
                <input type="text" name="lastName" id="lastName" onChange={ e => setApellido(e.target.value)} required maxLength="50"/>
            </div>

            <div>
                <label htmlFor="phone">Teléfono:</label>
                <input type="text" name="phone" id="phone" onChange={ e => setTelefono(e.target.value)} required maxLength="15"/>
            </div>
        
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="text" name="email" id="email" onChange={ e => setCorreo(e.target.value)} required maxLength="50"/>
                <span>{mensajeValidacionCorreo}</span>
            </div>
            <p>{mensajeValidacion}</p>
            {confirmarMensaje === '' ? 
            <button onClick={enviarFormulario}>Enviar formulario</button>
            :<Link to={"/cart/compraExitosa"} onClick={clear}>Enviar orden de compra</Link>}
    </div>
    )
}
export default FormularioOrden;