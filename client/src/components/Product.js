// import React from "react";
// import { Card, CardImg } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Rating from "./Rating";
// import star from "../assets/ratingstart.svg"
// import "./component.css";


// const Product = ({ product }) => {
//   console.log(product);
//   return (
//     <div className="product-list">
//       <div className="card p-3 rounded">
//         <img
//           className="cardImg card-img-top mx-auto"
//           src={product?.images[0]?.url}
//           alt="image"
//         />
//         <div className="card-body d-flex flex-column">
//           <div className="price-name">
//             <p className="card-title">
//               <Link to={`/product/${product._id}`}>{product?.name}</Link>
//             </p>
//             <p className="card-text">
//               ₹{product?.price} <span className="kg">/kg</span>
//             </p>
//           </div>
//           <div className="ratings mt-auto">
//           <div className="rating">
//             <img src={star} alt="" />
//             <p className="star">{Math.floor(product?.rating)}.0</p>
//             <p className="rating-review"> {product?.numReviews} Rating and Reviews</p>
//           </div>
//             {/* <Rating
//               value={product.rating}
//               text={` ${product.numReviews} Rating and Reviews`}
//             /> */}
//           </div>
//           {/* <div className="gap"></div> */}
//           <div className="added">
//             <div className="dot"></div>
//             <p className="added">
//               Product Added On {product?.updatedAt[8]}
//               {product.updatedAt[9]}-{product?.updatedAt.split("-")[1]}-
//               {product?.updatedAt.split("-")[0]}
//             </p>
//           </div>
//           {/* <div className="gap"></div> */}
//           <div className="added">
//             <div className="dot"></div>
//             <p className="fresh">Fresh and Healthy</p>
//           </div>
//           {/* <div className="gap"></div> */}
//           {/* <div className="gap"></div> */}
//           <div className="viewDetails-btn">
//             <Link to={`/product/${product?._id}`} className="btn btn-block">
//             <button className="viewDetails">View Details</button>
//             </Link>
//             </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import star from "../assets/ratingstart.svg"
// import "./component.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Card>
        <Link to={`/product/${product?._id}`}>
          <Card.Img src={product?.images[0].url} alt={product?.name} />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </Card.Title>
          <Card.Text>
            ₹{product?.price.toFixed(2)}
          </Card.Text>
          <div className="ratings">
            <div className="rating">
              {/* <img src={star} alt="" /> */}
              {/* <p className="star">{Math.floor(product?.rating)}.0</p> */}
              <p className="rating-review">
                {product?.numReviews} Rating and Reviews
              </p>
            </div>
          </div>
          <div className="added">
            <div className="dot"></div>
            <p className="added">
              Product Added On {product?.updatedAt.slice(8, 10)}-
              {product?.updatedAt.slice(5, 7)}-{product?.updatedAt.slice(0, 4)}
            </p>
          </div>
          <Link to={`/product/${product?._id}`} className="btn btn-primary btn-block">
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
