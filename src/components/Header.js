import * as React from "react";
import { Grid, Row, Col as Column } from "react-flexbox-grid";
import logo from "../assets/pokedex_logo.png";

export const Header = () => {
  return (
    <Grid>
      <Row center="xs">
        <Column xs={6}>
          <img src={logo} alt="logo" />
        </Column>
      </Row>
    </Grid>
  );
};
