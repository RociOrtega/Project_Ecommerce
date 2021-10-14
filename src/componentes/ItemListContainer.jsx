import React, {useState,useEffect} from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router";

const productos = [
    {
        id: 1,
        categoria: 1,
        title: 'Cerveza 1',
        price: 1000,
        stock: 10,
        thumbnail: 'https://www.gastroactitud.com/wp-content/uploads/2019/10/Lexico-cervezas.jpg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 2,
        categoria: 1,
        title: 'Cerveza 2',
        price: 2500,
        stock: 33,
        thumbnail:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada-1024x646.jpg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 3,
        categoria: 1,
        title: 'Cerveza 3',
        price: 3800,
        stock: 16,
        thumbnail: 'http://www.eltiempo.com/files/image_640_428/uploads/2017/08/10/598cfa8c9370e.jpeg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 4,
        categoria: 1,
        title: 'Cerveza 4',
        price: 920,
        stock: 5,
        thumbnail: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.png',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 5,
        categoria: 1,
        title: 'Cerveza 5',
        price: 1050,
        stock: 19,
        thumbnail: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/07/13/5f0c78598c987.jpeg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 6,
        categoria: 2,
        title: 'Growler',
        price: 5700,
        stock: 22,
        thumbnail: 'https://www.thebeertimes.com/wp-content/uploads/2018/04/Growler_personalizados.jpg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 7,
        categoria: 2,
        title: 'Polera1',
        price: 13000,
        stock: 9,
        thumbnail: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F614e0b737dea940df53b8a39%2Fimage%2F614e0b737dea940df53b8a39%2Foriginal%2F802173_png.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=3658f5809256755c0f70eea0bd234bf9',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 8,
        categoria: 2,
        title: 'Polera2',
        price: 13000,
        stock: 7,
        thumbnail: 'https://s-print.cl/wp-content/uploads/2018/09/IMG_9521.jpg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 9,
        categoria: 2,
        title: 'Abre Botella1',
        price: 3500,
        stock: 11,
        thumbnail: 'https://www.webadicto.net/wp-content/uploads/kebo-destapa-bebidas-con-una-mano-01_1.jpg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 10,
        categoria: 2,
        title: 'Abre Botella2',
        price: 3500,
        stock: 39,
        thumbnail: 'https://cdn-3.expansion.mx/dims4/default/cab6470/2147483647/strip/true/crop/1200x627+0+0/resize/1200x627!/format/webp/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fac%2Fdf%2F6186348b4769bf8bc9e45cf6aa3e%2Fcerveza.jpg',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 11,
        categoria: 2,
        title: 'Llavero1',
        price: 2500,
        stock: 27,
        thumbnail: 'https://ae01.alicdn.com/kf/H9db39ce59ad74a4490251dd940d4b8d9a/LLavero-de-vasos-de-cerveza-de-resina-para-hombre-y-mujer-llavero-de-coche-colgante-de.jpg_.webp',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    },
    {
        id: 12,
        categoria: 2,
        title: 'Llavero2',
        price: 2500,
        stock: 4,
        thumbnail: 'https://i.linio.com/p/83ad6161945b058edac7c3d980af8c1e-product.webp',
        description: 'descripción breve del producto, cc, tipo de cerveza etc'
    }
]

function ItemListContainer(){
    const {id} = useParams()
    const [items, setItems] = useState([]);
    const [estado, SetEstado] = useState("Cargando...");

    useEffect(() => {
        if(id){
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(productos.filter(producto => producto.categoria == id))
                },2000)
            })
            promesa.then(items => {
                setItems(items)
                SetEstado(" ")
            })
        }else{
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(productos)
                },2000)
            })
            promesa.then(items => {
                setItems(items)
                SetEstado(" ")
            })
        }

    },[id])

    return(
        <section id="productos">
            <h2>Hola, este es el catálogo!</h2>
            <h3>{estado}</h3>
            <ItemList catalogo={items}/>
        </section>        
    )  
}

export default ItemListContainer;