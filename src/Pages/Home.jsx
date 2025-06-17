import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import summer from "../Pages/image/summer.jpg";
import shop from "../Pages/image/shop.jpg";
import Feedback from "./Feedback";
import { useCart } from "./CartContext";
import "./Home.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { cart, addToCart } = useCart();

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [userReviews, setUserReviews] = useState([]);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.warning(`${product.name} is already in the cart!`);
    } else {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, review, rating: parseInt(rating) };
    setUserReviews([...userReviews, newReview]);
    setName("");
    setReview("");
    setRating(5);
    toast.success("Thanks for your feedback!");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const products = [
    { id: 1, name: "Wireless Headphones", price: 50.0, image: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/cloud-pink/pink-01-solo4.jpg" },
    { id: 2, name: "Smart Watch", price: 1300.0, image: "https://www.jiomart.com/images/product/original/rvnjwxmr8l/punnkfunnk-kids-smart-watch-1-44-tft-display-4g-sim-card-phone-with-long-lasting-voice-call-kids-gps-music-player-alarm-clock-games-ip67-waterproof-blue-product-images-orvnjwxmr8l-p608090268-0-202402191738.jpg?im=Resize=(1000,1000)" },
    { id: 3, name: "Gaming Mouse", price: 550.0, image: "https://images-cdn.ubuy.co.in/633b97e462e47a4eee2183bd-inhanda-wired-rgb-gaming-mouse-high.jpg" },
    { id: 4, name: "I Pad", price: 500.0, image: "https://iplanet.one/cdn/shop/files/iPad_10th_generation_Wi-Fi_Pink_PDP_Image_Fall23_Position-1__en-IN_f9e5b5a9-6fe7-4d8e-a75e-27be484a0b4b.jpg?v=1718803017" },
    { id: 5, name: "I Phone", price: 1400.0, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725959411/Croma%20Assets/Communication/Mobiles/Images/309727_0_ox4325.png" },
    { id: 6, name: "JYX Sound Speaker", price: 2400.0, image: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg" },
  ];

  const testimonials = [
    { name: "Priya Patel", review: "Amazing service and quick delivery! Highly recommended.", rating: 5 },
    { name: "Rahul Mehta", review: "Great prices and awesome support from Arbuda team!", rating: 4 },
    { name: "Sneha Joshi", review: "I bought my phone from here. Totally satisfied!", rating: 5 },
  ];

  return (
    <>
   {/* sale section */}

{/* <section className="sale-section text-white">
  <div className="overlay">
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold mb-4 animate-title">🔥 Mega Sale is Live! 🔥</h1>
      <p className="lead mb-4">Up to <span className="highlight">70% OFF</span> on top mobile gadgets and accessories!</p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/sale-products" className="btn btn-danger btn-lg shadow">Shop Now</Link>
        <a href="#offers" className="btn btn-outline-light btn-lg shadow">View Offers</a>
      </div>
    </div>
  </div>
</section> */}


      <section className="banner_slider_wrapper">
        <div className="container-fluid">
          <Slider {...settings}>
            <div className="row d-flex align-items-center mx-0 mt-5" style={{ height: "100vh" }}>
              <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
                <h6 className="text-uppercase text-primary">Limited time offer!</h6>
                <h1 className="fw-bold">Huge Summer Sale</h1>
                <p className="text-muted">Mobile, Tablet, Headphone & much more...</p>
                <a href="#" className="btn btn-primary btn-lg mt-3 slider-btn">Buy Now</a>
              </div>
              <div className="col-lg-6 col-md-12 p-0">
                <img src={summer} alt="Summer Sale" className="img-fluid w-100 h-100 slider-img" style={{ height: "100vh", objectFit: "cover" }} />
              </div>
            </div>

            <div className="row d-flex align-items-center flex-row-reverse mx-0" style={{ height: "100vh" }}>
              <div className="col-lg-6 col-md-12 p-0">
                <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg" alt="iPhone" className="img-fluid w-100 h-100 slider-img" style={{ height: "100vh", objectFit: "cover" }} />
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
                <h6 className="text-uppercase text-danger">Limited time offer!</h6>
                <h1 className="fw-bold">iPhone</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-danger btn-lg mt-3 slider-btn">Buy Now</a>
              </div>
            </div>

            <div className="row d-flex align-items-center mx-0 mt-5" style={{ height: "80vh" }}>
              <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
                <h6 className="text-uppercase text-success">Limited time offer!</h6>
                <h1 className="fw-bold">boAt Bluetooth Speakers</h1>
                <p className="text-muted">Portable Bluetooth Speaker with 14W boAt Signature Sound, RGB LED Design, 12 Hours Playback</p>
                <a href="#" className="btn btn-success btn-lg mt-3 slider-btn">Buy Now</a>
              </div>
              <div className="col-lg-6 col-md-12 p-0">
                <img src="https://m.media-amazon.com/images/I/71RWq2CjD-L._AC_UF1000,1000_QL80_.jpg" alt="boAt Speaker" className="img-fluid w-100 h-100 slider-img" style={{ height: "100vh", objectFit: "cover" }} />
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="about-section container my-5 py-5">
        <div className="row align-items-center mx-0">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={shop} alt="Culinary Adventure" className="img-fluid rounded mb-3" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">About Arbuda Mobile</h2>
            <p>Arbuda Mobile is a leading technology company delivering high-quality mobile devices and accessories.</p>
            <p>We continuously strive to innovate and push boundaries to provide unmatched customer experience.</p>
          </div>
        </div>
      </section>

      <section className="product container my-5">
        <h2 className="text-center mb-4 text-primary">Arbuda Mobile Products</h2>
        <div className="row mx-0">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card product-card p-3 shadow-lg h-100">
                <img src={product.image} alt={product.name} className="product-img card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <h6>Price : ${product.price}</h6>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <button onClick={() => handleAddToCart(product)} className="btn btn-success">Add to Cart</button>
                    <a href="#" className="btn btn-primary product-btn">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={2000} />
      <Feedback />

      {(userReviews.length > 0 || testimonials.length > 0) && (
        <section className="testimonials-section">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="testimonial-cards">
            {[...testimonials, ...userReviews].map((item, index) => (
              <div className="testimonial-card" key={index}>
                <FaQuoteLeft className="quote-icon" />
                <p className="review-text">"{item.review}"</p>
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <h5 className="customer-name">- {item.name}</h5>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="add-review container my-5">
        <h2 className="text-center mb-4">⭐ Add Your Review</h2>
        <form className="glass-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <textarea placeholder="Write your review here..." value={review} onChange={(e) => setReview(e.target.value)} required />
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>{star} Star</option>
            ))}
          </select>
          <button type="submit" className="btn btn-success mt-3">
            <i className="fa fa-paper-plane me-2"></i>Submit Review
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
