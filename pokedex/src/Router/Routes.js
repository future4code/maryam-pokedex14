import React from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ListaPokemon from "../Telas/ListaPokemon"
import DetalhesPokemon from "../Telas/DetalhesPokemon"
import TelaPokemon from "../Telas/TelaPokemon"



const Routes = () => {
    
    return (
        <BrowserRouter>
              <Switch>
                  <Route exact path="/"  component={ListaPokemon}/>
                  <Route exact path="/pokemon/:name"  component={DetalhesPokemon}/>
                  <Route exact path="/pokedex"  component={TelaPokemon}/>
                  <Route>
                      <div>Página não encontrada</div>
                  </Route>
              </Switch>
        </BrowserRouter>
    )
} 
export default Routes;