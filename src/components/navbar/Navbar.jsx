import React from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo to="/">Clarus Library</Logo>
      <HamburgerIcon>{menuIcon}</HamburgerIcon>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">Home</MenuLink>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/">Home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
