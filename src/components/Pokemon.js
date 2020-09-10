import * as React from "react";

import { pokemon } from "../store/store";
import { setPokemon } from "../store/events";
import { fetchPokemonFx } from "../store/effects";

import { PokemonItem } from "./PokemonItem";

export default class Pokemon extends React.Component {
  async componentDidMount() {
    const { data } = await fetchPokemonFx(this.props.match.params);
    const pokemonIdx = this.props.match.params.id;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdx}.png?raw=true`;
    setPokemon({ data, image, pokemonIdx });
  }
  render() {
    return <PokemonItem />;
  }
}

pokemon.on(setPokemon, (payload) => payload);
