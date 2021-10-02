import React, {useState,useEffect} from 'react';
import ItemList from "./ItemList";

function miPromesa(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("Aca debería cargar el itemlist o no ?!");
        }, 2000);
    });
}

function ItemListContainer(props){
    const [estado, setEstado] = useState('Cargando...');

    useEffect(() => {    
        let cargaDatos = miPromesa();
        cargaDatos.then(function(resolve){
            console.log(resolve);
            setEstado('Listo!');   
        })      
        cargaDatos.catch(function(){setEstado('Error')})
        cargaDatos.finally(() => {console.log("Promesa terminada")})
    }, []);

    return (
        <section id="productos">
            <h2>{props.greeting}</h2>
            <h3>{estado}</h3> 
            <ItemList/>
        </section>        
    )  

}

export default ItemListContainer;