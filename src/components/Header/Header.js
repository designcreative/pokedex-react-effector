import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/pokedex_logo.png";
import Search from "../Search/Search";

const Header = (params) => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="/" className="mr-auto">
        <img height="30" src={logo} alt="logo" />
      </Navbar.Brand>
      <Search search={params.search} />
    </Navbar>
  );
};

export default Header;
