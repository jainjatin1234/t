import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Categoryreducer } from "./Reducer/CategoryReducer";
import { ProductdetailReducer,  productreducer } from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/CartReducer";

const reducer = combineReducers({
  cat: Categoryreducer,
  pro:productreducer,
  pdetail:ProductdetailReducer,
  cart:cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        
},

}

//createstore

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
