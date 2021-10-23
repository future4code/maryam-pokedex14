import React, { useState, useContext, useEffect  } from "react";
import { useHistory, useParams } from "react-router-dom";
import GlobalContexte from "../Global/GlobalContext"
import axios from "axios";
import Header from "../Header/Header"
import styled from "styled-components";
import { paraPokedex } from "../Router/Coordenador";

const PokeInformacoes = styled.main`
    display: flex;
    justify-content: space-space-evenly;
    flex-direction: column;
    height: 75%;
    align-items: center;
`
const Imagens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 75%;
    align-self: center;
`
const Img = styled.img`
    background-color:#f1f1f1;
 `
const Etats = styled.div`
    background-color:#f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    align-self: center;
    height: 75%;
    width: 300px;
`
const Titulo = styled.h2`
    align-self: center;
`
const DigiMovin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    height: 75%;
    width: 300px;
`
const Tipo = styled.div`
    display: flex;
    justify-content: space-around;
    height: 10%;
    background-color: #f1f1f1;
`
const Moves = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    background-color: #f1f1f1; 
    height: 80%;
`

const DetalhesPokemon = () => {
    
    const [name, telaPokedex] = useParams()
    const [selecionarPokemon, setSelecionarPokemon] = useState({})
    const {pokemons, pokedex} = useContext(GlobalContexte)
    const history = useHistory()
    const URL = "https://pokeapi.co/api/v2"


    useEffect(() => {
        let atual = [];
        if (telaPokedex) {
          atual = pokedex.find((item) => {
            return item.name === name;
          });
        } else {
          atual = pokemons.find((item) => {
            return item.name === name;
          });
        }
    
        if (!atual) {
          axios
            .get(`${URL}/pokemon/${name}`)
            .then((res) => setSelecionarPokemon(res.data))
            .catch((err) => console.log(err.response.message));
        } else {
            setSelecionarPokemon(atual);
        }
      }, []);

    return (
        <div>
                < Header 
                leftButtonFunction={() => history.goBack()}
                showRightButton
                />
               <PokeInformacoes>
                   <Imagens>
                       <Img src={selecionarPokemon && selecionarPokemon.sprites && selecionarPokemon.sprites.front_default} />
                       <Img src={selecionarPokemon && selecionarPokemon.sprites && selecionarPokemon.sprites.back_default} /> 
                   </Imagens> 
                   <Etats>
                       <Titulo>Poderes</Titulo>
                       {selecionarPokemon && selecionarPokemon.stats && selecionarPokemon.stats.map((stat) => {
                           return (
                               <p key={stat.stat.name}>
                                   <strong>{stat.stat.name}:</strong>
                                   {stat.base_stat}
                               </p>
                           );
                       })}
                   </Etats>
                   <DigiMovin>
                       <Tipo>
                           {selecionarPokemon && selecionarPokemon.type && selecionarPokemon.type.map((type) => {
                               return <p key={type.type.name}>{type.type.name}</p>
                           })}
                       </Tipo>
                       <Moves>
                           <Titulo> Principais ataques</Titulo>
                           {selecionarPokemon && selecionarPokemon.moves && selecionarPokemon.moves.map((move, index) => {
                              return (
                                index < 5 && <p key={move.move.name}>{move.move.name}</p>
                              )
                           })}
                       </Moves>
                   </DigiMovin>
               </PokeInformacoes>
        </div>
    )
}
export default DetalhesPokemon;