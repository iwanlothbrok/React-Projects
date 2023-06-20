import PokemonList from "./components/PokemonList";
import React, { useState } from "react";
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState(["bukbasulr"]);

  axios.get();

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
