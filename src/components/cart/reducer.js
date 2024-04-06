import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./actionTypes";

const initialState = {
  cartItems: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        id: action.payload.id,
        quantity: 1,
        product: action.payload,
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove item if quantity is zero
      };
    default:
      return state;
  }
};

export default Reducer;
