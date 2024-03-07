
import "./css/style.css";
import "./css/style.css";
import Footer from "./component/layouts/Footer";
import {Route, Router, Routes} from 'react-router-dom'
import Home from "./component/Home";
import Header from "./component/layouts/Header";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/cart/Cart";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productdetails/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
