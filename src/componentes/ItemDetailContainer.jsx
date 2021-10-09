import React, {useState,useEffect} from 'react';
import ItemDetail from "./ItemDetail";

const listaProductos = [
    {
        title: 'Cerveza 1',
        price: 1000,
        thumbnail: 'https://www.gastroactitud.com/wp-content/uploads/2019/10/Lexico-cervezas.jpg',
        id: 1,
        description: 'descripción breve del producto, cc, tipo de cerveza etc',
        stock: '10'
    },
    {
        title: 'Cerveza 2',
        price: 2500,
        thumbnail:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada-1024x646.jpg',
        id: 2,
        description: 'descripción breve del producto, cc, tipo de cerveza etc',
        stock: '30'
    },
    {
        title: 'Cerveza 3',
        price: 3800,
        thumbnail: 'http://www.eltiempo.com/files/image_640_428/uploads/2017/08/10/598cfa8c9370e.jpeg',
        id: 3,
        description: 'descripción breve del producto, cc, tipo de cerveza etc',
        stock: '5'
    },
    {
        title: 'Cerveza 4',
        price: 920,
        thumbnail: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.png',
        id: 4,
        description: 'descripción breve del producto, cc, tipo de cerveza etc',
        stock: '19'
    },
    {
        title: 'Cerveza 5',
        price: 1050,
        thumbnail: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/07/13/5f0c78598c987.jpeg',
        id: 5,
        description: 'descripción breve del producto, cc, tipo de cerveza etc',
        stock: '24'
    }
];

function miPromesa(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(listaProductos);
        }, 2000);
    });
}

function ItemDetailContainer(){
    const [estadoDetail, setEstadoDetail] = useState('Cargando...');
    const [producto, setProducto] = React.useState(null);

    useEffect(() => {    
        let cargaDatosProductos = miPromesa();

        cargaDatosProductos
        .then(function(itemsProductos){
            setProducto(itemsProductos);     
            setEstadoDetail('Listo!');  
            console.log(itemsProductos);
        })      
        .catch(function(){setEstadoDetail('Error')})
        .finally(() => {console.log("Promesa terminada")})
    }, []);

    return (
        <section className="contenedorDetalles">
            <h3>{estadoDetail}</h3>
            {(producto !== null) && producto.map((producto,index) =>
                <ItemDetail
                    key = {index}
                    title = {producto.title}
                    price = {producto.price}
                    imgUrl = {producto.thumbnail}                        
                    description = {producto.description}
                    stock = {producto.stock}
                />
            )} 
        </section>  
    )  

}

export default ItemDetailContainer;