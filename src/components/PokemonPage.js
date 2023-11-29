import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const url = "http://localhost:3001/pokemon"
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadPokemon()
  }, [])

  const loadPokemon = () => {
    fetch(url)
    .then(r => r.json())
    .then(data => {
      setPokemon(data)
    })
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const addPokemon = (newPokemon) => {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} url={url}/>
      <br />
      <Search search={search} updateSearch={updateSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
