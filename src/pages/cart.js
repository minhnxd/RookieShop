import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../components/cart/actions";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  let TotalPrice = 0;
  if (cartItems.length === 0) {
    return (
      <div>
        <h2>My Cart</h2>
        <h3>Your Cart is Empty</h3>
        <Link to={`/`}>click here to find products</Link>
      </div>
    );
  }
  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.map((item) => (
        <Card key={item.id}>
          <tr>
            <th>
              <Container style={{ width: "25rem" }}>
                <Card.Link
                  as={Link}
                  to={`/category/${item.product.product.category}/products/${item.id}`}
                >
                  <Card.Img
                    style={{
                      height: 150,
                      width: 150,
                    }}
                    src={item.product.product.thumbnail} // Assuming 'product' has an 'image' property
                  />
                </Card.Link>
                <Card.Body>
                  <Card.Link
                    as={Link}
                    to={`/category/${item.product.product.category}/products/${item.id}`}
                  >
                    <Card.Title>
                      {item.product.product.brand} {item.product.product.title}
                    </Card.Title>
                  </Card.Link>
                  <Card.Text>${item.product.product.price}</Card.Text>
                </Card.Body>
              </Container>
            </th>
            <th>
              <Card.Body>
                <Card.Text>{item.product.product.description}</Card.Text>
              </Card.Body>
              Quantity: {item.quantity}
              <Button
                variant="outline-dark"
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </Button>{" "}
              <Button
                variant="outline-dark"
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </Button>{" "}
              <Button
                variant="outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </Button>{" "}
            </th>
          </tr>
          ${item.product.product.price * item.quantity}
          <p hidden>
            {(TotalPrice += item.product.product.price * item.quantity)}
          </p>
        </Card>
      ))}
      <p>
        <h3>Total Price: ${TotalPrice}</h3>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
