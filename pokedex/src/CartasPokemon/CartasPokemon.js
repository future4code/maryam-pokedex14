import React, {useContext} from "react";
import { detalhePokemon } from "../Router/Coordenador";
import { useHistory } from "react-router-dom";
import GlobalContext from "../Global/GlobalContext";
import styled from "styled-components";

const CardContainer = styled.div`
display: grid;
grid-template-rows: 90% 10%;
margin: 10px;
width: 250px;
height: 35vh;
`
const ImgPokemons = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: gray;
`
const Imagem = styled.img`
height: 60%;
`
const Buttons = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`


const CartasPokemon = ({pokemon, isPokedex}) => {
    const history = useHistory();
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalContext)

    const adicionarPokedex = () => {
        const indice = pokemons.findIndex(
            (item) => item.name === pokemon.name
        )
        const novaListaPokemons = [...pokemons];
        novaListaPokemons.splice(indice, 1);
        const ordenarPokemons = novaListaPokemons.sort((a, b) => {
            return a.id - b.id
        })
        const novaListaPokedex = [...pokedex, pokemon];
        const ordenarPokedex = novaListaPokedex.sort((a, b) => {
            return a.id - b.id
        });

        setPokedex(ordenarPokedex)
        setPokemons(ordenarPokemons)

    }

    const excluirPokedex = ()  => {
        const indice = pokedex.findIndex((item) => 
        item.name === pokemon.name
        );

        const novaListaPokedex = [...pokedex];
        novaListaPokedex.splice(indice, 1);
        const ordenarPokedex = novaListaPokedex.sort((a, b) => {
            return a.id - b.id;
        })

        const novaListaPokemons = [...pokemons, pokemon];
        const ordenarPokemons = novaListaPokemons.sort((a, b) => {
            return a.id - b.id;
        });

        setPokemons(ordenarPokemons)
        setPokedex(ordenarPokedex)
    }

    return(
        <CardContainer>
          <ImgPokemons>
          <Imagem 
          src={pokemon.sprites && pokemon.sprites.front_default}
          alt={pokemon.name} />
          </ImgPokemons>
          <Buttons>
           <button onClick={isPokedex ? excluirPokedex : adicionarPokedex}>
               {isPokedex ? "Excluir da Pokedex" : "Adicionar a Pokedex"}
           </button>
           <button onClick={() => detalhePokemon(history, pokemon.name, isPokedex)}> 
                Detalhes
           </button>
          </Buttons>
        </CardContainer>
    )
}

export default CartasPokemon; 