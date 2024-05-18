// import React from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { Link } from "react-router-dom";
// function ProductCard({ product }) {
//   const { image, title, id, rating, price } = product;
//   // console.log(rating);
//   console.log(rating.rate);
//   return (
//     <div className={`${classes.card_container}`}>
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" className={classes.img_container} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating?.rate} precision={0.1} />
//           {/*count */}
//           <small>{rating?.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button}>add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider.js/DataProvider";
// import { Type } from "../../Utility/Action";
function ProductCard({ product }) {
  const { title, rating, price, id, image, description } = product;

  // const [state, dispatch] = useContext(DataContext);

  // console.log(state);

  // const addToCart = () => {
  //   dispatch({
  //     type: Type.ADD_TO_BASKET,
  //     item: {
  //       title,
  //       rating,
  //       price,
  //       id,
  //       image,
  //       description,
  //     },
  //   });
  // };

  return (
    <div
      className={`${classes.card_container}
      }`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {/* {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>} */}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
      </div>

      {/* {renderAdd && (
        <button className={classes.button} onClick={addToCart}>
          {" "}
          Add to Cart
        </button>
      )} */}
    </div>
  );
}

export default ProductCard;
