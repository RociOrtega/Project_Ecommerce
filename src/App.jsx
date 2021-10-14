import Header from "./componentes/Header";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Switch>
                    <Route path="/"component={ItemListContainer}/>
                    <Route path="/categoria/:id" component={ItemListContainer}/>
                    <Route path="/item/:id" component={ItemDetailContainer}/>
                </Switch>         
            </main>
        </BrowserRouter>
    )
}

export default App;