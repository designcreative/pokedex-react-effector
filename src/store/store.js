import { createStore, combine } from "effector";

// Search
export const formInput = createStore("");

// Router page
export const page = createStore("");

// Pokemons
export const pokemons = createStore([]);
export const pokemon = createStore([]);

// Pagination
const offset = createStore(0);
const data = createStore([]);
const elements = createStore([]);
const perPage = createStore(10);
const currentPage = createStore(0);
export const paginator = combine([offset, data, elements, perPage, currentPage]);
// paginator.watch(console.log);
