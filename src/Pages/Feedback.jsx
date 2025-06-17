import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const companyLogos = [
    { name: "Oppo", src: "https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png" },
    { name: "Vivo", src: "https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.png" },
    { name: "iPhone", src: "https://1000logos.net/wp-content/uploads/2017/02/iPhone-Logo-2007.png" },
    { name: "Samsung", src: "https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG14.png" },
    { name: "OnePlus", src: "https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo.png" },
    { name: "Realme", src: "https://brandlogos.net/wp-content/uploads/2021/05/realme-logo.png" },
    { name: "Xiaomi", src: "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-Logo-2014.png" },
    { name: "Motorola", src: "https://casepal.ie/wp-content/uploads/Motorola-logo-design-png-download.png" }, 
    { name: "Poco", src: "https://1000logos.net/wp-content/uploads/2022/12/POCO-Emblem.png" },  
];


const Feedback = () => {
    return (
        <>
            <style>{`
    .feedback {
    font-family: 'Poppins', sans-serif;
    }
    .logo-image {
    width: 100%;
    max-height: 100px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  }

    .card:hover .logo-image {
    filter: grayscale(5%);
    
    transform: scale(1.4);
  }

    .card {
    border - radius: 12px;
    transition: box-shadow 0.3s ease-in-out;
  }

    .card:hover {
     box - shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
     
  }
    
       `}

            </style>
            <div className=" feedback container my-5">
                <h1 className="text-center mb-4 text-primary">Customer Feedback Highlights</h1>
                <h3 className="text-center text-black-40 mb-4">Our Brand Partners</h3>
                <h6 className="text-center text-black-50">Our customers' feedback reflects the quality and reliability of our brand.<br></br> Their satisfaction is our greatest motivation,
                     and we take pride in living up to their trust.</h6>
                <div className="row mt-5">
                    {companyLogos.map((logo, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card text-center shadow-sm p-3">
                                <img src={logo.src} alt={logo.name} className="card-img-top logo-image" />
                                <div className="card-body">
                                    <h5 className="card-title">{logo.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <footer></footer> */}
        </>
    );

};


export default Feedback;
