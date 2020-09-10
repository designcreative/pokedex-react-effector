import * as React from "react";
import { Grid, Row } from "react-flexbox-grid";

import { pokemons } from "../store/store";
import { getPokemons } from "../store/events";
import { fetchPokemonsFx } from "../store/effects";

import { PokemonsList } from "./PokemonsList";

export default class Dashboard extends React.Component {
  async componentDidMount() {
    const { results } = await fetchPokemonsFx();
    results.map(({ name, url }) => {
      const pokemonIdx = url.split("/")[url.split("/").length - 2];
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdx}.png?raw=true`;
      const data = { name, imageUrl, pokemonIdx };
      return getPokemons(data);
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <PokemonsList />
        </Row>
      </Grid>
    );
  }
}

pokemons.on(getPokemons, (state, payload) => [...state, payload]);
