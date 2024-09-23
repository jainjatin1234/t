import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Categoryreducer } from "./Reducer/CategoryReducer";
import { ProductdetailReducer,  productreducer } from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/CartReducer";
import { userReducer, UserregisterReducer } from "./Reducer/Userreducer";

const reducer = combineReducers({
  cat: Categoryreducer,
  pro:productreducer,
  pdetail:ProductdetailReducer,
  cart:cartReducer,
  auth:UserregisterReducer,
  user:userReducer,

});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
},

}

//createstore

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
