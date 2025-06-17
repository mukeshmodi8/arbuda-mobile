import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mobiles.css";
import { useCart } from "../Pages/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mobiles = () => {
    const { cart, addToCart } = useCart();

    const handleAddToCart = (product) => {
        const isAlreadyInCart = cart.some((item) => item.id === product.id);

        if (isAlreadyInCart) {
            toast.warning(`${product.name} Is Already in The Cart! `, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        } else {
            addToCart(product);
            toast.success(`${product.name} Added To cart! `, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        }
    };

    const products = [
        { id: 1, name: "iPhone 14 Pro Max", price: 149999.00, image: "https://png.monster/wp-content/uploads/2023/09/PNG.monsterapple-iphone-15-pro-photo%20png.png" },
        { id: 2, name: "Samsung Galaxy S23 Ultra", price: 124999.00, image: "https://static.vecteezy.com/system/resources/previews/022/722/945/non_2x/samsung-galaxy-s23-ultra-transparent-image-free-png.png" },
        { id: 3, name: "OnePlus 11 5G", price: 61999.00, image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png" },
        { id: 4, name: "Google Pixel 7 Pro", price: 84999.00, image: "https://lh3.googleusercontent.com/5HfEFAGY9yNrOxDzu0bov0pLYzPHenvhsbQ4rJG-8dX1YOPqfQHzjU-0Kx2B0wrTdPncXgrprvXtZsE_gC1Al895Vi_dHmUxNA" },
        { id: 5, name: "Xiaomi 13 Pro", price: 79999.00, image: "https://i05.appmifile.com/905_item_uk/15/09/2023/7dbad2b88f5905685ef80ae2659491be.png" },
        { id: 6, name: "Realme GT 2 Pro", price: 49999.00, image: "https://img-prd-pim.poorvika.com/product/Realme-GT-2-Pro-5G-Steel-Black8GB-128GB-3.png" },
        { id: 7, name: "Vivo X80 Pro", price: 86999.00, image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1651807558189/e7db3841bf6db0ac7a6f58948e8ab515.png" },
        { id: 8, name: "Oppo Find X5 Pro", price: 104999.00, image: "https://www.giztop.com/media/catalog/product/cache/97cc1143d2e20f2b0c8ea91aaa12053c/o/p/oppo_find_x5_pro.png" },
        { id: 9, name: "Asus ROG Phone 6", price: 71999.00, image: "https://dlcdnwebimgs.asus.com/gain/169BAE2A-C0D8-4651-8FBD-D09396315571" },
        { id: 10, name: "Nothing Phone 1", price: 37999.00, image: "https://www.corning.com/microsites/csm/gorillaglass/Nothing/CGG_Nothing_Phone%201.png" },
        { id: 11, name: "Samsung Galaxy Z Fold 4", price: 154999.00, image: "https://www.spark.co.nz/etc/designs/telecomcms/canvas/content/telecomcms/business/shop/samsung-shop/z-series/z-fold-4/_jcr_content/root/responsivegrid/importerex/img/2.png" },
        { id: 12, name: "iPhone SE 2022", price: 49999.00, image: "https://atlas-content-cdn.pixelsquid.com/stock-images/iphone-se-2022-white-e1NDw86-600.jpg" },
        { id: 13, name: "Redmi Note 12 Pro+", price: 29999.00, image: "https://cdn.beebom.com/mobile/redmi-note-12-pro-plus-5g-front-back-2.png" },
        { id: 14, name: "Samsung Galaxy A73", price: 41999.00, image: "https://www.phonecopy.com/dynamic/phone_images/samsung_galaxy_a37.png" },
        { id: 15, name: "OnePlus Nord 2T", price: 28999.00, image: "https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/may/karen/Karen-Green-540x540-L.png" },
        { id: 16, name: "Vivo V23 Pro", price: 38999.00, image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1642646277628/143c089eb1fa2e3dc391823a0a9eed6f.png" },
        { id: 17, name: "Realme 9 Pro+", price: 24999.00, image: "https://media.croma.com/image/upload/v1708674115/Croma%20Assets/Communication/Mobiles/Images/248839_0_fsrxmy.png" },
        { id: 18, name: "Moto Edge 30", price: 27999.00, image: "https://motorolain.vtexassets.com/arquivos/ids/157225/Motorola-edge-30-pdp-render-Mojito-4-31f5yjhf.png?v=637878943961030000" }
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">Latest Smartphones</h1>
            <h3 className="text-center text-black-40 mb-4">Best Quality Smartphones</h3>
            <h6 className="text-center text-black-50">
                Our customers' feedback reflects the quality and reliability of our brand.<br />
                Their satisfaction is our greatest motivation, and we take pride in living up to their trust.
            </h6>

            {/* <div className="cart-section text-center mb-4">
                <h4>Your Cart ({cart.length} items)</h4>
                {cart.length === 0 ? (
                    <p className="text-danger">Your cart is empty!</p>
                ) : (
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.name}
                                <span className="badge bg-primary rounded-pill">Rs.{item.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div> */}

            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card mobile-card text-center shadow-sm p-3">
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

           
            <ToastContainer />
        </div>
    );
};

export default Mobiles;
