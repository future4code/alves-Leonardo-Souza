import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")
  


  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((res) => {
      setPokeList(res.data.results)  
      console.log("Entrou no then")        
    })
    .catch((err) => {
      console.log("Entrou no catch")
    })
  }, [])


  const changePokeName = (event) => {

    setPokeName(event.target.value) 
  };

  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });


  const pokemon = pokeName && <PokeCard pokeName={pokeName}/>;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>

        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>

          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
