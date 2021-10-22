import React, { useContext } from "react";
import styled from "styled-components";
import CartasPokemon from "../CartasPokemon/CartasPokemon";
import GlobalContext from "../Global/GlobalContext";
import { useHistory } from "react-router-dom";


const Header = styled.header`
 background-color: black;
 color: white;
 height: 8vh;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 9px;
 
 
 `

const Button = styled.button`
  position: absolute ;
  right: 10px;
  margin: 10px;
  border-radius: 6px;
  padding: 5px;

  
 
 `
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
    <div>
        <Header>
            <h1><i>HomePage</i></h1>
            < Button><i>Lista de Pokedex</i></Button>
        </Header>
        <PokeLista>
            {pokemons && pokemons.map((poke)=> {
                return <CartasPokemon hey={poke.name} poke={poke} />
            })}
        </PokeLista>
    </div>
    )
}
export default ListaPokemon;