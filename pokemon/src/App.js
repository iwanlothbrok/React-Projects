import PokemonList from "./components/PokemonList";
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    let cancel
    setLoading(true);
    axios.get(currentPage, {

      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {

      setLoading(false);
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
    });

    return () => cancel.cancel();
  }, [currentPage])

  if (loading) return 'Loading...';
  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
