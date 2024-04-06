import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./actions";

const AddToCart = ({
  id,
  cartItems,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
}) => {
  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity > 0) {
        incrementQuantity(id);
      } else {
        removeFromCart(id);
      }
    } else {
      addToCart(id);
    }
  };

  return (
    <Button as={Link} to="/cart" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
