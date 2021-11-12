import React, {useState,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { firestore } from '../firebase';

const ItemDetailContainer = () =>{
    const [detalle, setDetalle] = useState({})
    const [estado, setEstado] = useState("Cargando...");
    const {id} = useParams()

    useEffect(() => {
        const db = firestore;
        const productoDetalle = db.collection('productos').doc(id);
        const query = productoDetalle.get();

        query.then((doc)=> {
            setDetalle({id: doc.id, ...doc.data()});
            setEstado(" ")
        })
        query.catch((error)=> {
            console.log(error)
        })
    },[])

    return (
        <section className="contenedorDetalles">
            <h3>{estado}</h3>
            <ItemDetail detalle = {detalle}/>
        </section>  
    )  

}

export default ItemDetailContainer;