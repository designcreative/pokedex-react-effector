import * as React from "react";
import { useStore } from "effector-react";

import { pokemon } from "../store/store";

export const PokemonItem = () => {
  const data = useStore(pokemon);
  pokemon.watch(console.log);
  return (
    <div>
      <span>{data}</span>
    </div>
  );
};
