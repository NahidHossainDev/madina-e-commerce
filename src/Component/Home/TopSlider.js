import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "../Images/ArloPro2.png"
import Img2 from "../Images/sony-smartwatch-android-watch-phone-png-favpng-a7NP7fZDghmpxeTfqbD2aNTQ4.jpg";


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="container-width">
        <Slider {...settings}>
          <div className="row slider">
            <div className="col-md-6">
              <h1>hellow</h1>
           </div>
            <div className="col-md-6">
              <h1>By</h1>
           </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h1>Arlo Pro2</h1>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <div className="col-6">
              <img
                src={Img2}
                style={{ width: "400px", height: "400px" }}
                alt="arlo pro"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
