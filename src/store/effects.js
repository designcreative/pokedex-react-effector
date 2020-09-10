import { createEffect } from "effector";
import axios from "axios";

export const fetchPokemonsFx = createEffect(async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=16";
  const res = await axios.get(url);
  return res.data;
});

export const fetchPokemonFx = createEffect(async ({ id }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const res = await axios.get(url);
  return res;
});
