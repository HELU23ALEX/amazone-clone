// import React from "react";
// import { Link } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import classes from "./header.module.css";
// import LowerHeader from "./LowerHeader";
// import { DataContext } from "../DataProvider/DataProvider";
// import { useContext } from "react";

// const Header = () => {
//   const [{ basket }, dispatch] = useContext(DataContext);

//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);
//   return (
//     <section className={classes.fixed}>
//       <section>
//         <div className={classes.header_container}>
//           {/* first div */}
//           {/* logo */}
//           <div className={classes.logo_container}>
//             <Link to="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </Link>

//             {/* Delivery  */}
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Deliver to</p>
//                 <span>Ethiopia</span>
//               </div>
//             </div>
//           </div>
//           {/* Second div */}
//           {/* search */}
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" name="" id="" placeholder="search product" />
//             <BsSearch size={25} />
//           </div>

//           {/* third div */}
//           <div className={classes.order_container}>
//             <Link to="" className={classes.language}>
//               <img
//                 src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
//                 alt="American Flag"
//               />
//               <select>
//                 <option value="">EN</option>
//               </select>
//             </Link>

//             {/* three components */}
//             <Link to="/auth">
//               <div>
//                 {/* <select> */}
//                 {/* <option value=""> */}
//                 <p>Hello,Sign In</p>
//                 {/* <br /> */}
//                 <span>
//                   Account & Lists
//                   {/* <select className={classes.my}>
//                     <option>Account & Lists</option>
//                   </select> */}
//                 </span>
//                 {/* </option> */}
//                 {/* </select> */}
//               </div>
//             </Link>
//             {/* orders */}
//             <Link to="/order">
//               <p>returns</p>
//               <span>& Orders</span>
//             </Link>
//             {/* cart */}
//             <Link to="/cart" className={classes.cart}>
//               <BiCart size={35} />
//               <span>{totalItem}</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utility/firebase";

// import { BiCart } from "react-icons/bi";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  //  console.log(basket.length)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">ALL</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <BsSearch size={25} />
        </div>
        {/* right side */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://th.bing.com/th/id/OIP.o6qGMJjK3eeBHQYMGaV3pQHaEC?rs=1&pid=ImgDetMain"
              alt=""
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          {/* three component */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>SignOut</span>
                </>
              ) : (
                <>
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          {/* order */}
          <Link to="/order">
            <p>returns</p>
            <span>& Order</span>
          </Link>
          {/* CART */}
          <Link to="/cart" className={classes.cart}>
            <FiShoppingCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
