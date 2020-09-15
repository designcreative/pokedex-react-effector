import React from "react";
import { Link } from "react-router-dom";
import { Col as Column } from "react-flexbox-grid";
import styled from "styled-components";

import { page } from "../../store/store";
import { setPage } from "../../store/events";

const StyledLink = styled(Link)`
  text-align: center;
  color: grey;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

page.on(setPage, (url) => url);

const StyledCard = ({ children, url }) => {
  setPage(url);
  return (
    <Column xs={12} sm={3}>
      <StyledLink to={url}>{children}</StyledLink>
    </Column>
  );
};

export default StyledCard;
