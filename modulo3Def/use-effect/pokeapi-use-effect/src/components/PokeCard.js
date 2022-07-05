import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  const [pokemonEscolhido, setPokemonEscolhido] = useState({})
  

  useEffect (() => {
    pegaPokemon(props.pokeName)
})

  const pegaPokemon = ((pokeName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res) => {
      setPokemonEscolhido(res.data)
      console.log("Entrou no then")
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  })

  return (
    <figure>
     
      <strong>{pokemonEscolhido.name && pokemonEscolhido.name.toUpperCase()}</strong>
     
      <p>Peso: {pokemonEscolhido.weight} Kg</p>
      
      <p>Tipo: {pokemonEscolhido.types && pokemonEscolhido.types[0].type.name}</p>
      {pokemonEscolhido.sprites && (
          <img src={pokemonEscolhido.sprites.front_default} alt={pokemonEscolhido.name} />
        )}
      </figure>
  );
};

export default PokeCard;
