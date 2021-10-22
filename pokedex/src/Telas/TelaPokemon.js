import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../Global/GlobalContext";
import CartasPokemon from "../CartasPokemon/CartasPokemon";
import styled from "styled-components";


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
        <div>
            <Main>
                {pokedex && pokedex.map((poke) => {
                    return < CartasPokemon isPokedex key={poke.name} poke={poke} />
                })}
            </Main>
        </div>
    )
}
export default TelaPokemon;