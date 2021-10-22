
export  const irParaListaDePokemons = (history) => {
    history.push("/")
}

export  const detalhePokemon = (history, name, isPokedex) => {
    isPokedex ? history.push(`/pokemon/${name}/telaPokedex`)
    : history.push(`/pokemon/${name}`)
}

export  const paraPokedex = (history) => {
    history.push("/pokedex")
 
}





