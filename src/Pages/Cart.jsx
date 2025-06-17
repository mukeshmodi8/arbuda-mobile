import React from "react";
import { useCart } from "./CartContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleRemove = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to remove "${item.name}" from the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item.id);
        toast.error(`${item.name} removed from cart!`);
      }
    });
  };

  const handleCheckout = () => {
    navigate("/address"); // पहले एड्रेस पेज पर जाएं
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-danger">Your cart is empty!</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <small>Rs.{item.price.toFixed(2)}</small>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h5 className="text-end">Total: Rs.{getTotalPrice()}</h5>
          <div className="text-center">
            <button className="btn btn-success px-4" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Cart;
