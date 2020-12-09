import React from 'react';
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import NavDrawer from "./NavDrawer";
  
const Header1 = () => {
    return (
      <div className="header-1 container-width">
        <div id="navDrawer">
          <NavDrawer />
        </div>
        <div className="logo">
          <Link to="home">Madina</Link>
        </div>
        <nav>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/newProducts">New Products</Link>
          </li>
          <li>
            <Link to="/bestSales">Best Sales</Link>
          </li>
          <li>
            <Link to="/pricesDrops">Prices Drops</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </nav>
        <div className="nav-cart">
          <LocalMallOutlinedIcon className="cart-icon" />
          <div className="total-cart-item">00</div>
          $0.00
        </div>
      </div>
    );
};

export default Header1;