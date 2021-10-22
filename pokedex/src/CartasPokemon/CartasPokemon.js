import React, {useContext} from "react";
import { detalhePokemon } from "../Router/Routes";
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


const CartasPokemon = (props) => {
    const history = useHistory();
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalContext)

    const adicionarPokedex = () => {
        const indice = pokemons.findIndex(
            (item) => item.name === props.poke.name
        )

        const novaListaPokemons = [...pokemons];
        novaListaPokemons.splice(indice, 1);

        const ordenarPokemons = novaListaPokemons.sort((a, b) => {
            return a.id - b.id
        })

        const novaListaPokedex = [...pokedex, props.poke];
        const ordenarPokedex = novaListaPokedex.sort((a, b) => {
            return a.id - b.id
        });

        setPokedex(ordenarPokedex)
        setPokemons(ordenarPokemons)

    }

    const excluirPokedex = ()  => {
        const indice = pokedex.findIndex(
            (item) => item.name === props.poke.name
        );

        const novaListaPokedex = [...pokedex];
        novaListaPokedex.splice(indice, 1);
        const ordenarPokedex = novaListaPokedex.sort((a, b) => {
            return a.id - b.id;
        })

        const novaListaPokemons = [...pokemons, props.poke];
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
          src={props.poke && props.poke.sprites.front_default}
          alt={props.poke.name} />
          </ImgPokemons>
          <Buttons>
           <button onClick={props.isPokedex ? excluirPokedex : adicionarPokedex}>
               {props.isPokedex ? "Excluir da Pokedex" : "Adicionar a Pokedex"}
           </button>
           <button onClick={() => detalhePokemon(history, props.poke.name, props.isPokedex)}> 
                Detalhes
           </button>
          </Buttons>
        </CardContainer>
    )
}

export default CartasPokemon; 