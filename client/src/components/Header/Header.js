import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <div>
      <Navbar className={style.main} data-bs-theme="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">TODO APP</Navbar.Brand>
          <Nav className={style.header}>
            <NavLink
              to="/"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              Home
            </NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
