import React, { useContext } from "react";
import styled from "styled-components";
import CartasPokemon from "../CartasPokemon/CartasPokemon";
import GlobalContext from "../Global/GlobalContext";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { paraPokedex } from "../Router/Coordenador";


const PokeLista = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  height: 92vh;
`


const ListaPokemon = () => {

    const {pokemons} = useContext(GlobalContext);
    const history = useHistory();
    return (
       <>
            <Header title={"Lista de Pokémons"}
            leftButtonFunction={() => paraPokedex(history)}
            
            />
            <PokeLista>
            {pokemons.map((poke)=> {
                return <CartasPokemon hey={poke.name} pokemon={poke} />
            })}
            </PokeLista>
       </>
    )
}
export default ListaPokemon;