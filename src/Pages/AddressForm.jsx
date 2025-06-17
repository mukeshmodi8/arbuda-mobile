import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    instructions: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // 👉 Navigate to Payment page and pass address data via state
    navigate("/payment", { state: formData });
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-primary">📦 Delivery Address</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Full Address</label>
          <textarea
            className="form-control"
            name="address"
            rows="2"
            required
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Pincode</label>
          <input
            type="text"
            className="form-control"
            name="pincode"
            required
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Special Instructions (Optional)</label>
          <input
            type="text"
            className="form-control"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
