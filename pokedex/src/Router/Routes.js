import React from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import PokeDetail from "../PokeDetail/PokeDetail";
import PokedexPage from "../PokedexPage/PokedexPage";

const Routes = () => {
    return (
        <BrowserRouter>
              <Switch>
                  <Route path="/"  component={HomePage}/>
                  <Route path="/pokedex/:id"  component={PokeDetail}/>
                  <Route path="/pokedex"  component={PokedexPage}/>
              </Switch>
        </BrowserRouter>
    )
} 
export default Routes;