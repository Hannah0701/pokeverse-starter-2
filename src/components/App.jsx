import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";

import fetchPokemon from "../fetchPokemon.js";

function pokemonReducer(pokemon, action) {
  if (action.type === "loaded") {
    return action.data;
  }

  if (action.type === "added") {
    return pokemon.map((p) => {
      if (p.id === action.id) {
        return { ...p, is_in_party: true };
      } else {
        return p;
      }
    });
  }

  if (action.type === "remove") {
    return pokemon.map((p) => {
      if (p.id === action.id) {
        return { ...p, is_in_party: false };
      } else {
        return p;
      }
    });
  }
  
  throw new Error(`Unhandled action type: ${action.type}`);
}

function App() {
  const [pokemon, setPokemon] = useState([]);
  const inParty = pokemon.filter((p) => p.is_in_party);
  const notInParty = pokemon.filter((p) => !p.is_in_party);

//   function addToParty(id) {
//     setPokemon(pokemon.map(p) => {
//       if (p.id === id) {
//         return { ...p, is_in_party: true };
//       } else { 
//         return p;
//       }
//     })
// };
  function addToParty(id) {
  dispatch({
    type: "added",
    id: id
  });

  function removeFromParty(id) {
    dispatch({
      type: "remove",
      id: id
    });

  useEffect(()) => {
    fetchPokemon().then(pokemon) => {
      dispatch({
        type: "loaded",
        data: pokemon
      });
    }
  }

  // function removeFromParty(id) {
  //   setPokemon(
  //     pokemon.map(p) => {
  //     if (p.id === id) {
  //       return { ...p, is_in_party: false };
  //     } else { 
  //       return p;
  //     }
  //   }
  // )};

  useEffect(() => {
    fetchPokemon().then(setPokemon);
  }, []);

  return (
    <>
      <Header partySize={inParty.length}/>
      <Main pokemon={pokemon} 
            inParty={inParty}
            addToParty={addToParty}
            notInParty={notInParty}
      />
    </>
  );
}

export default App;
