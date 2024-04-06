import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./actionTypes";

export const addToCart = (item) => {
  return async (dispatch) => {
    try {
      // Fetch the product information from the API
      const response = await fetch(`https://dummyjson.com/products/${item}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const product = await response.json();

      // Dispatch the action with the product information
      dispatch({
        type: ADD_TO_CART,
        payload: {
          id: item, // Extracting the id from the object
          quantity: 1, // Initial quantity
          product, // Include the product information in the payload
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const incrementQuantity = (itemId) => ({
  type: INCREMENT_QUANTITY,
  payload: itemId,
});

export const decrementQuantity = (itemId) => ({
  type: DECREMENT_QUANTITY,
  payload: itemId,
});
