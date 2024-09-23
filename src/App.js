
import "./css/style.css";
import "./css/style.css";
import Footer from "./component/layouts/Footer";
import {Route, Router, Routes} from 'react-router-dom'
import Home from "./component/Home";
import Header from "./component/layouts/Header";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/cart/Cart";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import Payment from "./component/cart/Payment";
import { loadUser } from "./redux/Action/Useraction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Profile from "./component/user/Profile";
import UpdateUserProfile from "./component/user/UpdateUserProfile";
import UpdatePassword from "./component/user/UpdatePassword";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  },[dispatch])
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productdetails/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/order/confirm" element={<ConfirmOrder/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/updateprofile" element={<UpdateUserProfile/>}/>
      <Route path="/updatepassword" element={<UpdatePassword/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
