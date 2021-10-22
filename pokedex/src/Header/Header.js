import React from "react";
import { paraPokedex } from "../Router/Coordenador";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Headerr = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
    position: relative;
    height: 8vh;
`
const BotaoUm = styled.button`
    left: 10px;
    position: absolute;
`
const Butao2 = styled.button`
    right: 10px;
    position: absolute;

`

const Header = (leftButtonFunction, title, showRightButton) => {

    const history = useHistory();

    const botao = () => {
        switch (title) {
            case "Lista de Pokémons":
                return "Ir para Pokedex";
              case "Pokédex":
                return "Voltar para lista de pokemons";
              default:
                return "Voltar";
        }
    }

    return (
        <Headerr>
          < BotaoUm onClick={leftButtonFunction}>
              {botao()}
          </BotaoUm>
          <h1>{title}</h1>
          {showRightButton && (
              <Butao2 onclick={() => paraPokedex(history)}>
                Ir para Pokedex
              </Butao2>
          )}
        </Headerr>
    )
}

export default Header;