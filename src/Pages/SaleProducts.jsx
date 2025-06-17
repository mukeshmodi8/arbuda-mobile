import React from "react";
import Slider from "react-slick";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SaleProducts.css";

// const products = Array.from({ length: 25 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   price: 1000 + i * 100,
//   discount: 70,
//   image: `https://dummyimage.com/300x300/000/fff&text=Product+${i + 1}`,
  
// }));
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

const SaleProducts = () => {
  const { addToCart } = useCart();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const gridProducts = products.slice(0, 6);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">🛒 70% OFF Products</h2>

      {/* Product Slider */}
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="px-2 mb-5">
            <div className="card mb-5 h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">Original: ₹{product.price}</p>
                <p className="text-success fw-bold">
                  Now: ₹{Math.round(product.price * 0.3)}
                </p>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
       
      </Slider >

      {/* Grid Layout */}
      <h4 className="mt-5 mb-5">✨ Best Picks for You</h4>
      <div className=" mb-5 row">
        {gridProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">Original: ₹{product.price}</p>
                <p className="text-success fw-bold">
                  Now: ₹{Math.round(product.price * 0.3)}
                </p>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
