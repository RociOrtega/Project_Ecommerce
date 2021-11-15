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
            setMensajeValidacion('* Todos los campos son obligatorios');
        }else {
            setMensajeValidacion('');
        }if(!validarCorreo(correo)) {
            setMensajeValidacionCorreo('* El correo ingresado no es valido');
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
        <section className="infoContacto">
        <h2 className="mainTitulo">Información de contacto</h2>
        <div className="form">
            <div>
                <label htmlFor="name" className="inputLabelForm">Nombre</label>
                <input type="text" name="name" id="name" onChange={ e => setNombre(e.target.value)} required maxLength="50" placeholder="Ingresa tu nombre" className="inputForm"/>
            </div>

            <div>
                <label htmlFor="lastName" className="inputLabelForm">Apellido</label>
                <input type="text" name="lastName" id="lastName" onChange={ e => setApellido(e.target.value)} required maxLength="50" placeholder="Ingresa tu apellido" className="inputForm"/>
            </div>

            <div>
                <label htmlFor="phone" className="inputLabelForm">Teléfono</label>
                <input type="text" name="phone" id="phone" onChange={ e => setTelefono(e.target.value)} required maxLength="15" placeholder="Ingresa tu teléfono" className="inputForm"/>
            </div>
        
            <div>
                <label htmlFor="email" className="inputLabelForm">Correo electrónico</label>
                <input type="text" name="email" id="email" onChange={ e => setCorreo(e.target.value)} required maxLength="50" placeholder="Ingresa tu correo" className="inputForm"/>
            </div>
        </div>
        <p className="mensajeErrorForm">{mensajeValidacionCorreo}</p>
        <p className="mensajeErrorForm">{mensajeValidacion}</p>
        {confirmarMensaje === '' ? 
        <button onClick={enviarFormulario} className="btn-finalizar btn-finalizarTexto">Enviar formulario</button>
        :<button className="btn-finalizar btn-finalizarTexto"><Link to={"/cart/compraExitosa"} onClick={clear} className="btn-finalizarTexto btn-finalizarTextoSize">Enviar orden de compra</Link></button>}
    </section>
    )
}
export default FormularioOrden;