import React, {useState, useEffect} from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";


const GlobalState = (props) => {
     
    const [pokedex, setPokedex] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonNames, setPokemonNames] = useState([]);
    const URL = "https://pokeapi.co/api/v2"

    useEffect(() => {

        const novaLista = [];
        pokemonNames.forEach((item) => {
            axios
            .get(`${URL}/pokemon/${item.name}`)
            .then((res) => {
                novaLista.push(res.data);
                if(novaLista.length === 20){
                  const ordenarList = novaLista.sort((a, b) =>{
                      return a.id - b.id
                  })
                    setPokemons(ordenarList)
                };
            })
            .catch((err) => {
                console.log(err.message)
            })
        })
    },[pokemonNames])

     const dados = {
         pokemons,setPokemons,pokedex,setPokedex
     };

     const getPokemonNames = () => {
         axios
         .get(`${URL}/pokemon`)
         .then((res) => {
            setPokemonNames(res.data.results)
         })
         .catch((err) =>{
             console.log(err.message)
         })
     }

     useEffect(() => {
        getPokemonNames();
    }, [])

    return(
        <GlobalContext.Provider value={dados}>
            {props.children} 
        </GlobalContext.Provider>
    )
}

export default GlobalState;