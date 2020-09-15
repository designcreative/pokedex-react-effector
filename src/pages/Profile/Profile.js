import React, { useEffect } from "react";
import axios from "axios";
import { Grid, Row, Col as Column } from "react-flexbox-grid";
import { Card, Badge } from "react-bootstrap";
import { createStore, createEffect } from "effector";
import { useList } from "effector-react";
import { useParams } from "react-router-dom";

const pokemon = createStore([]);
pokemon.watch((value) => console.log("updated", value));

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

fetchPokemonFx.done.watch(({ params, result }) => {
  console.log(result);
});

pokemon.on(fetchPokemonFx.doneData, (_, pokemon) => pokemon);

const Profile = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchPokemonFx(id);
  }, [id]);

  return (
    <Grid>
      <Row className="justify-content-md-center">
        <Column>
          {useList(pokemon, ({ name, image, idx, res }) => (
            <Card style={{ width: "18rem" }} key={idx}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>
                  Types:
                  {res.data.types.map((type, i) => (
                    <Badge variant="secondary" className="mx-1" key={i}>
                      {type.type.name}
                    </Badge>
                  ))}
                </p>
              </Card.Body>
            </Card>
          ))}
        </Column>
      </Row>
    </Grid>
  );
};

export default Profile;
