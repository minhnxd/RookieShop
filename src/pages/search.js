import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Products from "../components/products";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AddToCart from "../components/cart/addToCart";

const Search = () => {
  const { search } = useParams();
  return (
    <>
      <Products url={`https://dummyjson.com/products/search?q=${search}`}>
        {(products) =>
          products.map((product, prodIndex) => (
            <Card key={prodIndex}>
              <tr>
                <th>
                  <Container style={{ width: "25rem" }}>
                    <Card.Link as={Link} to={`products/${product.id}`}>
                      <Card.Img
                        style={{
                          height: 150,
                          width: 150,
                        }}
                        src={product.thumbnail}
                      />

                      <Card.Body>
                        <Card.Title>
                          {product.brand} {product.title}
                        </Card.Title>
                        <Card.Text>${product.price}</Card.Text>
                      </Card.Body>
                    </Card.Link>
                  </Container>
                </th>
                <th>
                  <Card.Body>
                    <Card.Text>Rating: {product.rating}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <AddToCart id={`${product.id}`} />
                </th>
              </tr>
            </Card>
          ))
        }
      </Products>
    </>
  );
};

export default Search;
