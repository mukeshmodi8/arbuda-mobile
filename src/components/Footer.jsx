import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <FaMapMarkerAlt className="icon" /> Paldi Mithi, Deodar, Banaskantha, 385330
          </p>
          <p>
            <FaPhoneAlt className="icon" /> Dipak Modi:
            <a href="tel:+919601543844"> +91 9601543844</a>
          </p>
          <p>
            <FaPhoneAlt className="icon" /> Trikam Modi:
            <a href="tel:+919004056482"> +91 9004056482</a>
          </p>
          <p>
            <FaEnvelope className="icon" />{" "}
            <a href="mailto:trikammodi786@gmail.com">trikammodi786@gmail.com</a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="footer-section form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy;Copyright ©2025 All rights reserved | This template is made with ❤ by Mr. Happy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
