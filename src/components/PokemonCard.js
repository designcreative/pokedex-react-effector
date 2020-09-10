import * as React from "react";
import { Col as Column } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  display: block;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 20px;
  border-radius: 8px;
  color: #999;
`;

export const PokemonCard = ({ pokemon, url, id }) => (
  <Column xs={2} key={id}>
    <StyledLink to={`/pokemon/${id}`}>
      <img src={url} alt={pokemon} />
      <p>{pokemon}</p>
    </StyledLink>
  </Column>
);
