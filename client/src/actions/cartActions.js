import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  //getState is just toState of whatever reducer we want preset in our state
  const { data } = await axios.get(`https://procommerce.onrender.com/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.product._id,
      name: data.product.name,
      images: data.product.images,
      price: data.product.price,
      countInStock: data.product.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
