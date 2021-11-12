import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router";
import { firestore } from '../firebase';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [estado, setEstado] = useState("Cargando...");
    const { id } = useParams();

    useEffect(() => {
        const db = firestore;
        const items = db.collection('productos');
        const nuevo_array_productos = [];
        const arrayItems = (resultado) =>{
            const documentos = resultado.docs;
            documentos.forEach(producto => {
                const id = producto.id;
                const el_resto = producto.data();
                const producto_final = {id, ...el_resto};
                nuevo_array_productos.push(producto_final);
            })
        }

        if(id){
            const queryFiltrado = items.where("category", "==", id).get();
            queryFiltrado.then((resultado) => {
                arrayItems(resultado)
                setProductos(nuevo_array_productos);
                setEstado(" ")
            })
            queryFiltrado.catch((error)=> {
                console.log(error)
            })
        } 
        else{
            const query = items.get()
            query.then((resultado) => {
                arrayItems(resultado)
                setProductos(nuevo_array_productos);
                setEstado(" ")
            })
            query.catch((error)=> {
                console.log(error)
            })
        }
    }, [id])

    return(
        <section id="productos">
            <h1 className="mainTitulo">Hola, este es el catálogo!</h1>
            <h3 className="estadoCarga">{estado}</h3>
            <ItemList catalogo={productos}/> 
        </section>        
    )  
}

export default ItemListContainer;