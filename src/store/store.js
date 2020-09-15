import { createStore } from "effector";

// Search
export const formInput = createStore("");

// Router page
export const page = createStore("");

// Pokemons
export const pokemons = createStore([]);
export const pokemon = createStore([]);

// Pagination
export const offset = createStore(0);

// Search
export const searchValue = createStore({});
