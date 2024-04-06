import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Categories from "../components/categories";
import CardGroup from "react-bootstrap/CardGroup";
import Products from "../components/products";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AddToCart from "../components/cart/addToCart";

const Home = () => {
  const categories = Categories();

  return (
    <>
      {categories.map((cat, index) => (
        <Card key={index}>
          <CardGroup>
            <Container style={{ width: "15rem" }}>
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link as={Link} to={`category/${cat}`}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
            </Container>
            <Card.Body>
              <CardGroup>
                <Products
                  url={`https://dummyjson.com/products/category/${cat}`}
                >
                  {(products) =>
                    products.slice(0, 3).map((product, prodIndex) => (
                      <Container style={{ width: "30rem" }}>
                        <Card key={prodIndex}>
                          <Card.Link
                            as={Link}
                            to={`category/${cat}/products/${product.id}`}
                          >
                            <Card.Img
                              style={{
                                height: 150,
                                width: 150,
                              }}
                              variant="top"
                              src={product.thumbnail}
                            />

                            <Card.Body>
                              <Card.Title>
                                {product.brand} {product.title}
                              </Card.Title>
                              <Card.Text>${product.price}</Card.Text>
                            </Card.Body>
                          </Card.Link>
                        </Card>
                        <AddToCart id={`${product.id}`} />
                      </Container>
                    ))
                  }
                </Products>
              </CardGroup>
            </Card.Body>
          </CardGroup>
        </Card>
      ))}
    </>
  );
};

export default Home;
