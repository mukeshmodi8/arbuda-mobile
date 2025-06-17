import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { useCart } from "./CartContext";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { cart } = useCart();
  const location = useLocation();
  const addressData = location.state || {};

  const [selectedUPI, setSelectedUPI] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("pending");

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const amount = getTotalPrice();

  const handleUPISelection = (upiApp) => {
    setSelectedUPI(upiApp);
  };

  useEffect(() => {
    if (paymentStatus === "pending" && selectedUPI) {
      setTimeout(() => {
        setPaymentStatus("success"); // Simulated success
      }, 5000);
    }
  }, [selectedUPI, paymentStatus]);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="text-success">💳 Complete Your Payment</h2>
        <p className="text-muted">Click on an app to see the QR Code</p>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 text-center" onClick={() => handleUPISelection("googlePay")}>
          <img
            src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-pay-payment-icon-vector-png-image_12256719.png"
            alt="Google Pay"
            className="img-fluid mt-2"
            style={{ maxWidth: "70px", cursor: "pointer" }}
          />
          <p className="mt-3"><strong>Pay via Google Pay</strong></p>
        </div>

        <div className="col-md-3 text-center" onClick={() => handleUPISelection("phonePe")}>
          <img
            src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
            alt="PhonePe"
            className="img-fluid mt-2"
            style={{ maxWidth: "100px", cursor: "pointer" }}
          />
          <p className="mt-3"><strong>Pay via PhonePe</strong></p>
        </div>

        <div className="col-md-3 text-center" onClick={() => handleUPISelection("otherUPI")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
            alt="Other UPI"
            className="img-fluid mt-2"
            style={{ maxWidth: "100px", cursor: "pointer" }}
          />
          <p className="mt-3"><strong>Pay via Other UPI Apps</strong></p>
        </div>
      </div>

      <div className="row justify-content-center align-items-center mt-4">
        {selectedUPI && (
          <div className="col-md-12 text-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=1234567890@${selectedUPI}&pn=MrHappy&am=${amount}`}
              alt={`${selectedUPI} QR`}
              className="img-fluid border p-2 shadow"
            />
            <p className="mt-3">
              <strong>Pay via {selectedUPI.charAt(0).toUpperCase() + selectedUPI.slice(1)}:</strong> 1234567890@{selectedUPI}
            </p>
          </div>
        )}
      </div>

      <div className="row justify-content-center align-items-center mt-4">
        <div className="col-md-5 bg-light p-4 rounded shadow">
          <h4 className="mb-4 text-primary d-flex align-items-center">
            <SiPaytm className="me-2" /> Paytm Payment Details
          </h4>
          <ul className="list-group list-group-flush text-start mb-3">
            <li className="list-group-item">
              <strong>Receiver:</strong> Mr. Happy
            </li>
            <li className="list-group-item">
              <strong>UPI ID:</strong> 1234567890@paytm
            </li>
            <li className="list-group-item">
              <strong>Amount:</strong> <FaRupeeSign className="text-success" /> {amount}
            </li>
            <li className="list-group-item">
              <strong>Status:</strong>{" "}
              <span className={paymentStatus === "success" ? "text-success" : "text-warning"}>
                {paymentStatus === "pending" ? "Awaiting Payment..." : paymentStatus === "success" ? "Payment Successful!" : "Payment Failed!"}
              </span>
            </li>
          </ul>
          <div className="text-center mt-3">
            <button
              className={`btn ${paymentStatus === "success" ? "btn-success" : "btn-warning"} px-4`}
              disabled={paymentStatus !== "pending"}
            >
              {paymentStatus === "pending" ? "Waiting for Payment..." : paymentStatus === "success" ? "Payment Successful!" : "Try Again"}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Delivery Address Section */}
      <div className="row mt-4">
        <div className="col-md-6 bg-white p-4 rounded shadow">
          <h4 className="mb-3 text-primary">📍 Delivery Address</h4>
          <p><strong>Name:</strong> {addressData.name}</p>
          <p><strong>Phone:</strong> {addressData.phone}</p>
          <p><strong>Address:</strong> {addressData.address}, {addressData.city} - {addressData.pincode}</p>
          {addressData.instructions && (
            <p><strong>Instructions:</strong> {addressData.instructions}</p>
          )}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="row mt-4">
        <div className="col-12">
          <h4>🛒 Order Summary:</h4>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.name}</span>
                <span>₹ {item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
