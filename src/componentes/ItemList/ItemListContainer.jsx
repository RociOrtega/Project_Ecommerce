import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router";
import { firestore } from '../firebase';


function ItemListContainer(){
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams()

  const getCollectionFromFirebase = () => {
    const db = firestore;
    const productos = db.collection('productos');
    const query = productos.get()

    query
      .then((resultado)=> {
        const docs = resultado.docs;
        const array_final_de_productos = [];
        docs.forEach(producto => {
          const id = producto.id;
          const el_resto = producto.data();
          const producto_final = {id,...el_resto};
          array_final_de_productos.push(producto_final);
        })
        console.table(array_final_de_productos);
        setProductos(array_final_de_productos);
        
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  const getCategoryFromFirebase = () => {
    const db = firestore;
    const productos =db.collection("productos");
    const query = productos.where("categoryId", "==", categoryId).get();

    query
      .then((resultado)=> {
        const docs = resultado.docs;
        const array_final_de_productos = [];
        docs.forEach(producto => {
          const id = producto.id;
          const el_resto = producto.data();
          const producto_final = {id,...el_resto};
          array_final_de_productos.push(producto_final);
        })
        console.table(array_final_de_productos);
        setProductos(array_final_de_productos);
        
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  useEffect(() => {
    if(categoryId) {
      getCategoryFromFirebase();
    } else {
      getCollectionFromFirebase();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

    return(
        <section id="productos">
            <h2>Hola, este es el catálogo!</h2>
            <ItemList catalogo={productos}/>
        </section>        
    )  
}

export default ItemListContainer;