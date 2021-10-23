import React, {useState,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { firestore } from '../firebase';

function ItemDetailContainer(){
    const [detalle, setDetalle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        
    },[id])

    return (
        <section className="contenedorDetalles">
            <ItemDetail detalle = {detalle}/>
        </section>  
    )  

}

export default ItemDetailContainer;