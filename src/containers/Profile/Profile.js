import React, { useCallback } from "react";
import axios from "axios";
// import { Grid, Row } from "react-flexbox-grid";
import { createStore, createEffect, createEvent } from "effector";
import { useStore } from "effector-react";
import { useParams, useLocation } from "react-router-dom";
import { page } from "../../store/store";

// import { pokemon } from "../../store/store";

// const params = useParams();
// console.log(match);

const fetchPokemonFx = createEffect(async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await axios.get(url);
  return res;
});

const getPokemon = createEvent("get pokemon");

const pokemon = createStore({}).on(fetchPokemonFx.doneData, (_, pokemon) => pokemon);

const Profile = () => {
  const { name } = useParams();
  fetchPokemonFx(name);
  const data = useStore(pokemon);
  console.log(name);
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Profile;
