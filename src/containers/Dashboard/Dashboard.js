import React from "react";
import axios from "axios";
import { Grid, Row } from "react-flexbox-grid";
import { createEffect } from "effector";
import { useList } from "effector-react";

import { pokemons } from "../../store/store";

import StyledCard from "../../components/StyledCard/StyledCard";

const fetchPokemonsFx = createEffect(async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=16";
  const res = await axios.get(url);
  const data = await res.data.results.map(({ name, url }) => {
    const idx = url.split("/")[url.split("/").length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png?raw=true`;
    return { name, url, image, idx };
  });
  return data;
});

pokemons.on(fetchPokemonsFx.doneData, (_, pokemons) => pokemons);

fetchPokemonsFx();

export default function Dashboard() {
  return (
    <React.Fragment>
      <Grid>
        <Row>
          <h1>Pokemon List</h1>
        </Row>
        <Row>
          {useList(pokemons, ({ name, image, idx }) => (
            <StyledCard key={idx} url={`pokemon/${name}`}>
              <img src={image} alt={name} />
              <h1>{name}</h1>
            </StyledCard>
          ))}
        </Row>
      </Grid>
    </React.Fragment>
  );
}
