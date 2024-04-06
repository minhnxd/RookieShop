import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Categories from "./categories";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Bar() {
  const navigate = useNavigate();
  const categories = Categories();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formText = event.target.elements.search.value;
    navigate(`/search/${formText}`);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand href="/">Minh's Store</Navbar.Brand>

        <Container fluid>
          <DropdownButton
            variant="outline-primary"
            id="dropdown-basic"
            title="Categories"
          >
            {categories.map((item, index) => {
              return (
                <Dropdown.Item key={index} as={Link} to={`category/${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <Form onSubmit={handleSubmit}>
            <Container>
              <Form.Group as={Col}>
                <Form.Control
                  required
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Container>
          </Form>
          <Nav.Link as={Link} to="/cart">
            <Button variant="outline-primary">Cart</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;
