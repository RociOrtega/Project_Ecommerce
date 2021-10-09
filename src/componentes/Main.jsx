import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
    return(
        <main>
            <ItemListContainer greeting="Hola User, este es el catálogo!"/>
            <ItemDetailContainer/>
        </main>
    )
}

export default Main;