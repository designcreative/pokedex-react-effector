import * as React from "react";
import { Grid, Row } from "react-flexbox-grid";
import { useList } from "effector-react";

import { pokemons } from "../store/store";

import { PokemonCard } from "./PokemonCard";
import { FormInput } from "./FormInput";

export const PokemonsList = () => (
  <Grid>
    <Row center="xs">
      <FormInput />
    </Row>
    <Row>
      {useList(pokemons, ({ name, imageUrl }, index) => (
        <PokemonCard pokemon={name} url={imageUrl} id={index} />
      ))}
    </Row>
  </Grid>
);
