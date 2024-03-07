import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../Constants/CartConstant";

export const addItemsTocart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://ecommerce-8mbj.onrender.com/api/getproductdetails/${id}`
  );
  console.log(data);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.data._id,
      name: data.data.name,
      price: data.data.price,
      image: data.data.image.url,
      stock: data.data.stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCartItems = (id) => async(dispatch,getState) => {
  dispatch({
    type:REMOVE_CART_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}