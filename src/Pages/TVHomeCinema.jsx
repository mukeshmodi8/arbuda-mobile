import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tvHomeCinema.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TVHomeCinema = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const isAlreadyInCart = cart.some((item) => item.id === product.id);

        if (isAlreadyInCart) {
            toast.warning(`${product.name} is already in the cart!`);
        } else {
            setCart([...cart, product]);
            toast.success(`${product.name} added to cart!`);
        }
    };

    const products = [
        { id: 1, name: "Samsung 55' 4K Smart TV", price: 65000.00, image: "https://images.samsung.com/is/image/samsung/assets/in/tvs/qled-tv/qled-tv-buy-q80b.jpg" },
        { id: 2, name: "LG 65' OLED TV", price: 180000.00, image: "https://www.lg.com/in/images/tvs/md07500399/gallery/OLED65CXPTA-D-01.jpg" },
        { id: 3, name: "Sony Bravia 75' 4K HDR TV", price: 220000.00, image: "https://m.media-amazon.com/images/I/71F4E2oi3QL._AC_UF1000,1000_QL80_.jpg" },
        { id: 4, name: "Mi 43' Smart TV", price: 32000.00, image: "https://i01.appmifile.com/webfile/globalimg/in/cms/D79E2945-2A8A-57E4-2A6E-6B08D2D5E267.jpg" },
        { id: 5, name: "Bose Home Theater System", price: 85000.00, image: "https://m.media-amazon.com/images/I/61AKuCwO1AL._AC_UF1000,1000_QL80_.jpg" },
        { id: 6, name: "Sony Home Cinema System", price: 95000.00, image: "https://www.sony.co.in/image/9b1e31f59ab7c6d267b04eaad1a2e2d3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320" },
        { id: 7, name: "JBL Soundbar", price: 25000.00, image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwec2fda92/JBL_BAR_9.1_HERO_x2.jpg" },
        { id: 8, name: "Philips Home Theater", price: 30000.00, image: "https://m.media-amazon.com/images/I/41lsEw0k8NL.jpg" },
        { id: 9, name: "Samsung QLED TV", price: 150000.00, image: "https://images.samsung.com/is/image/samsung/assets/in/tvs/qled-tv/buy-q70b.jpg" },
        { id: 10, name: "LG Soundbar", price: 20000.00, image: "https://www.lg.com/in/images/speakers/md07523453/gallery/SL9YG-AVSPLK-01.jpg" },
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">T.V & Home Cinema</h1>
            <h3 className="text-center text-black-40 mb-4">Best Quality Entertainment Products</h3>
            <h6 className="text-center text-black-50 text-center">
                Enjoy the ultimate cinematic experience at home with our top-quality TVs & Home Cinema systems.<br />
                Trusted by thousands of happy customers!
            </h6>

            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card tv-cinema-card text-center shadow-sm p-3">
                            <img src={product.image} alt={product.name} className="card-img-top product-image" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6>Price : Rs.{product.price.toFixed(2)}</h6>
                                <button onClick={() => addToCart(product)} className="btn btn-success mx-2">Add to Cart</button>
                                <a href="#" className="btn btn-primary product-btn">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ToastContainer position="top-center" autoClose={2500} />
        </div>
    );
};

export default TVHomeCinema;
