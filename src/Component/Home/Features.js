import React from 'react';
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";

const Features = () => {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="row">
            <div className="col-4">
              <LocalShippingOutlinedIcon />
            </div>
            <div className="col-8"></div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-4">
              <AutorenewOutlinedIcon />
            </div>
            <div className="col-8"></div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-4">
              <CreditCardOutlinedIcon />
            </div>
            <div className="col-8"></div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-4"><CallOutlinedIcon/></div>
            <div className="col-8"></div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-4"><CardGiftcardOutlinedIcon/></div>
            <div className="col-8"></div>
          </div>
        </div>
      </div>
    );
};

export default Features;