import React from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ListaPokemon from "../Telas/ListaPokemon"
import DetalhesPokemon from "../Telas/DetalhesPokemon"
import TelaPokemon from "../Telas/TelaPokemon"



export const irParaListaDePokemons = (history) => {
    history.push("/")
}

export const detalhePokemon = (history, name, isPokedex) => {
    isPokedex ? history.push(`/pokemon/${name}/telaPokedex`)
    : history.push(`/pokemon/${name}`)
}

export const paraPokedex = (history) => {
    history.push("/pokedex")
 
}

const Routes = () => {
    
    return (
        <BrowserRouter>
              <Switch>
                  <Route path="/"  component={ListaPokemon}/>
                  <Route path="/pokemon/:id/:telaPokedex"  component={DetalhesPokemon}/>
                  <Route path="/pokedex"  component={TelaPokemon}/>
                  <Route>
                      <div>Página não encontrada</div>
                  </Route>
              </Switch>
        </BrowserRouter>
    )
} 
export default Routes;