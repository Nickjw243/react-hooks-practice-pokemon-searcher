import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {

  const filteredPokemon = pokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemon.map(pokemon => 
      <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
