import { createEvent } from "effector";

export const getPokemons = createEvent("get pokemons");
export const getPokemon = createEvent("get pokemon");
export const setPokemon = createEvent("set pokemon");

export const setPage = createEvent("set page");
export const getPage = createEvent("get page");

// Pagination events
export const setPageOffsetPrevious = createEvent("set page previous offset");
export const setPageOffsetNext = createEvent("set page next offset");

// Search
export const setSearchValue = createEvent("set search value");
