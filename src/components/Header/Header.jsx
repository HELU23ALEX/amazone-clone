import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* first div */}
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            {/* Delivery  */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Second div */}
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>

          {/* third div */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="American Flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            {/* three components */}
            <Link to="">
              <div>
                {/* <select> */}
                {/* <option value=""> */}
                <p>Hello, Sign In</p>
                {/* <br /> */}
                <span>
                  <select className={classes.my}>
                    <option>Account & Lists</option>
                  </select>
                </span>
                {/* </option> */}
                {/* </select> */}
              </div>
            </Link>
            {/* orders */}
            <Link to="/order">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;

