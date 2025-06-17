import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useCart } from "../Pages/CartContext";
import AdBanner from './components/AdBanner';

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Swal from 'sweetalert2';
import logo from "../Pages/image/logo.png";
import "./Header.css";
import { auth } from "../../Firebase";

const Header = () => {
  const { cart } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          name: user.displayName || "User", 
          email: user.email,
        });
      } else {
        setCurrentUser(null);
      }
    });
  
    return () => unsubscribe();
  }, []);

  function logOut() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            Swal.fire({
              title: 'Logged out!',
              text: 'You have been successfully logged out.',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false,
            }).then(() => {
              window.location.href = "/";
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong during logout!',
            });
            console.error("Error during sign-out:", err);
          });
      }
    });
  }

  return (
    <nav className="header">
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="TechShed" className="logo" />
          <span className="brand text-primary">Arbuda</span>
          <span className="brand m-lg-2">Mobile</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="user-actions d-flex gap-2">

          <NavLink to="/wishlist" className="btn btn-outline-primary d-flex align-items-center gap-2">
            <FaHeart /> <span>Wishlist</span>
          </NavLink>

          <NavLink to="/cart" className="btn btn-outline-success d-flex align-items-center gap-2 position-relative">
            <FaShoppingCart /> <span>Cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-count">
              {cart.length}
            </span>
          </NavLink>

          {currentUser ? (
            <div className="dropdown">
  <button
    className="btn btn-outline-dark dropdown-toggle"
    type="button"
    id="profileDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <FaUser className="text-primary" /> Hello   {currentUser.name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="profileDropdown">
    <li>
      <NavLink className="dropdown-item" to="/profile">
        My Profile
      </NavLink>
    </li>
    <li>
      <button className="dropdown-item" onClick={logOut}>
        Logout
      </button>
    </li>
  </ul>
</div>

          ) : (
            <NavLink to="/login" className="btn btn-outline-dark d-flex align-items-center gap-2">
              <FaUser /> <span>Sign In</span>
            </NavLink>
          )}
        </div>

        <button
          className="menu-icon"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {dropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`header-bottom ${dropdownOpen ? "open" : ""}`}>
        <NavLink to="/home" onClick={() => setDropdownOpen(false)}>Home</NavLink>
        <NavLink to="/mobile" onClick={() => setDropdownOpen(false)}>Mobile</NavLink>
        <NavLink to="/computer" onClick={() => setDropdownOpen(false)}>Computers & Laptop</NavLink>
        <NavLink to="/tablets" onClick={() => setDropdownOpen(false)}>Tablets</NavLink>
        <NavLink to="/drones" onClick={() => setDropdownOpen(false)}>Drones & Cameras</NavLink>
        <NavLink to="/audio" onClick={() => setDropdownOpen(false)}>Audio</NavLink>
        <NavLink to="/tv" onClick={() => setDropdownOpen(false)}>T.V & Home Cinema</NavLink>
        <NavLink to="/wearable-tech" onClick={() => setDropdownOpen(false)}>Wearable Tech</NavLink>
        <NavLink to="/sale" className="sale" onClick={() => setDropdownOpen(false)}>Sale</NavLink>
      </div>
    </nav>
  );
};

export default Header;
