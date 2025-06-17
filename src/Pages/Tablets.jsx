import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tablets.css";
import { useCart } from "./CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tablets = () => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.warning(`${product.name} is already in the cart!`);
    } else {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy Tablet",
      price: 32000.0,
      image: "https://images.samsung.com/is/image/samsung/assets/in/tablets/galaxy-tab-a8/buy/001-tab-a8-gray-front.png",
    },
    {
      id: 2,
      name: "Apple iPad Pro",
      price: 85000.0,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-spacegray-wifi?wid=940&hei=1112&fmt=png-alpha&.v=1670865931425",
    },
    {
      id: 3,
      name: "Lenovo Tab M10",
      price: 15000.0,
      image: "https://p1-ofp.static.pub//fes/cms/2023/07/05/3r69cszqg7dx9tbeo4g2vlq8e28tkk448875.png",
    },
    {
      id: 4,
      name: "Microsoft Surface Pro",
      price: 90000.0,
      image: "https://m.media-amazon.com/images/I/81DDOx7k9+L._SL1500_.jpg",
    },
    {
      id: 5,
      name: "Huawei MatePad",
      price: 28000.0,
      image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-se/images/matepad-se-kv.png",
    },
    {
      id: 6,
      name: "Realme Pad",
      price: 18000.0,
      image: "https://image01.realme.net/general/20210917/1631862815687.png",
    },
  ];

  return (
    <div className="container my-5">
      <ToastContainer position="top-center" autoClose={2500} />
      <h1 className="text-center mb-4 text-primary">Our Shop Brand Tablets</h1>
      <h3 className="text-center text-black-40 mb-4">Best Quality Tablets</h3>
      <h6 className="text-center text-black-50">
        Our customers' feedback reflects the quality and reliability of our brand.
        <br />
        Their satisfaction is our greatest motivation, and we take pride in living up to their trust.
      </h6>
      <div className="row mt-5">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card computer-card text-center shadow-sm p-3">
              <img src={product.image} alt={product.name} className="card-img-top logo-image" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6>Price : Rs.{product.price.toFixed(2)}</h6>
                <button onClick={() => handleAddToCart(product)} className="btn btn-success mx-2">Add to Cart</button>
                <a href="#" className="btn btn-primary product-btn">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablets;
