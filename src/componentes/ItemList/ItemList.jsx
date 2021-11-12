import Item from "../ItemList/Item";

const ItemList = (props) => {
  const productoCatalago = props.catalogo;
  return(
    <div className="itemList">
      {(productoCatalago !== null) && productoCatalago.map((producto,index) =>
        <Item key = {index} detalle = {producto}/>
      )} 
    </div>
  )
}

export default ItemList;