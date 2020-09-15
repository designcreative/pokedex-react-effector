import React, { useEffect } from "react";
import axios from "axios";
import { Container, Row, Col as Column, Card } from "react-bootstrap";
import { createEffect } from "effector";
import { useList, useStore, useStoreMap } from "effector-react";

import { offset, pokemons, searchValue } from "../../store/store";
import { setSearchValue } from "../../store/events";

import StyledCard from "../../components/StyledCard/StyledCard";
import Pagination from "../../components/Pagination/Pagination";

const fetchPokemonsFx = createEffect(async (page) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=16`;
  const res = await axios.get(url);
  const data = await res.data.results.map(({ name, url }) => {
    const idx = url.split("/")[url.split("/").length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png?raw=true`;
    return { name, url, image, idx };
  });
  return data;
});

const fetchPokemonFx = createEffect(async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await axios.get(url);
  console.log(res);
  const data = await res.data.forms.map(({ name, url }) => {
    const idx = url.split("/")[url.split("/").length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png?raw=true`;
    return { name, url, image, idx, res };
  });
  return data;
});

pokemons.on(fetchPokemonsFx.doneData, (_, pokemons) => pokemons);
pokemons.on(setSearchValue, ({ search }) => fetchPokemonFx(search));

export default function Dashboard() {
  const page = useStore(offset);
  const search = useStore(searchValue);

  console.log(search);

  useEffect(() => {
    fetchPokemonsFx(page);
  }, [page]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          {useList(pokemons, ({ name, image, idx }) => (
            <StyledCard key={idx} url={`pokemon/${name}`}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                </Card.Body>
              </Card>
            </StyledCard>
          ))}
        </Row>
        <Row className="justify-content-md-center">
          <Column xs={3}>
            <Pagination />
          </Column>
        </Row>
      </Container>
    </React.Fragment>
  );
}
