import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

const Header2 = () => {
  return (
    <div className="header-2 container-width">
      <div className="row">
        <div className="col col-left col-lg-3 mb-3 hide position-relative">
          <div className="border border-primary rounded  m-2 text-light catagories-menu">
            <div className="d-inline-block p-1 bg-primary mr-5 ">
              <MenuIcon />
            </div>
            All Catagories <ExpandMoreIcon />
          </div>
          <div className="catagories-menu-item ">
            <li>Electronic</li>
            <li>Fashion</li>
            <li>Bags</li>
            <li>Computer</li>
            <li>Jewelry</li>
            <li>kids</li>
          </div>
        </div>
        <div className="col col-lg-6 d-flex align-items-center mb-3 px-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your search key..."
              aria-label="Amount (to the nearest dollar)"
            />
            <div class="input-group-append ">
              <span class="input-group-text bg-white border-none">
                <SearchIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="hide col col-left col-lg-3 mb-2 d-flex align-items-center text-light justify-content-around">
          <LocalShippingOutlinedIcon />
          <small>Free Shipping on Orders $50+</small>
        </div>
      </div>
    </div>
  );
};

export default Header2;
