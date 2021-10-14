import React, {useState,useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router';

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

function ItemDetailContainer(){
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {

        const promesa = new Promise((resolve,reject) => {
            setTimeout(() => {
                const producto = listaProductos.find(producto => producto.id === id)
                resolve(producto)
            },2000)
        })

        promesa.then(producto => setProducto(producto))

    },[id])

    return (
        <section className="contenedorDetalles">
            <ItemDetail 
                producto={producto}
                title = {producto.title}
                price = {producto.price}
                imgUrl = {producto.thumbnail}
                description = {producto.description}
                stock = {producto.stock}
            />
        </section>  
    )  

}

export default ItemDetailContainer;