import React from "react";
import styled from "styled-components";

const Div = styled.div`
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

const HomePage = () => {
    return (
        <Div>
            <h1><i>HomePage</i></h1>
            < Button><i>Lista de Pokedex</i></Button>
        </Div>
    )
}
export default HomePage;