import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemsTocart, removeCartItems } from "../../redux/Action/CartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(cartItems);

  const decreseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsTocart(id, newQty));
  };


  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsTocart(id, newQty));
  };

  const removeCardHandler = (id) => {
    dispatch(removeCartItems(id))

  }

  const checkOutHandler = () => {
    // alert('hello')
    if(isAuthenticated){
      navigate('/shipping')
    }else{
      navigate('/login')
    }
  }



  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="/">
                Home
              </a>
              <a className="breadcrumb-item text-dark" href="/">
                Shop
              </a>
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb End --> */}

      {/* <!-- Cart Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody className="align-middle">
                {cartItems.map((c) => (
                  <tr>
                    <td class="align-middle"><img src={c.image} alt="" style={{ width: "50px" }} />{c.name}</td>
                    <td class="align-middle">{c.price}</td>
                    <td class="align-middle">
                      <div class="input-group quantity mx-auto" style={{ width: "100px" }}>
                        <div class="input-group-btn">
                          <button class="btn btn-sm btn-primary btn-minus" onClick={() => decreseQuantity(c.product, c.quantity, c.stock)} >
                            <i class="fa fa-minus"></i>
                          </button>
                        </div>
                        <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value={c.quantity} />
                        <div class="input-group-btn">
                          <button class="btn btn-sm btn-primary btn-plus" onClick={ () => increaseQuantity(c.product, c.quantity ,c.stock)}>
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">{c.price * c.quantity}</td>
                    <td class="align-middle"><button class="btn btn-sm btn-danger" onClick={() => removeCardHandler(c.product)}><i class="fa fa-times"></i></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="col-lg-4">
            <form class="mb-30" action="">
              <div class="input-group">
                <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code" />
                <div class="input-group-append">
                  <button class="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Cart Summary</span></h5>
            <div class="bg-light p-30 mb-5">
              <div class="border-bottom pb-2">
                <div class="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>
                    {cartItems.reduce((acc, c) => acc + Number(c.quantity), 0)}
                    {"  "}
                    (Units)
                  </h6>                </div>
                {/* <div class="d-flex justify-content-between">
                  <h6 class="font-weight-medium">Shipping</h6>
                  <h6 class="font-weight-medium">$10</h6>
                </div> */}
              </div>
              <div class="pt-2">
                <div class="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h6 className="font-weight-medium">{`₹${cartItems.reduce(
                    (acc, c) => acc + c.quantity * c.price,
                    0
                  )}`}</h6>
                </div>
                <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={checkOutHandler} >Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </>
  );
};

export default Cart;
