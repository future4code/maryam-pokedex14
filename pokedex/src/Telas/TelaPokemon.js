import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../Global/GlobalContext";
import CartasPokemon from "../CartasPokemon/CartasPokemon";
import styled from "styled-components";
import Header from "../Header/Header";
import {irParaListaDePokemons} from "../Router/Coordenador";


const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  height: 92vh;

`

const TelaPokemon = () => {
    const { pokedex } = useContext(GlobalContext);
    const history = useHistory();

    return (
        <>
            < Header title={"Pokédex"}
             leftButtonFunction={() => irParaListaDePokemons(history)}
            />
            <Main>
                {pokedex && pokedex.map((poke) => {
                    return < CartasPokemon key={poke.name} isPokedex pokemon={poke} />
                })}
            </Main>
        </>
    )
}
export default TelaPokemon;