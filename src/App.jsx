import Header from "./componentes/Header/Header";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import Cart from "./componentes/cart/Cart";
import Footer from "./componentes/Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CartProvider from "./CartContext";
import OrdenDeCompra from "./componentes/cart/OrdenDeCompra";

const App = () => {
    return(
        <CartProvider>
            <BrowserRouter>
                <Header/>
                <main>
                    <Switch>
                        <Route path="/"component={ItemListContainer} exact/>
                        <Route path="/categoria/:id" component={ItemListContainer}/>
                        <Route path="/item/:id" component={ItemDetailContainer}/>
                        <Route path="/cart/compraExitosa" component={OrdenDeCompra}/>
                        <Route path="/cart/" component={Cart}/>
                    </Switch>         
                </main>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;
