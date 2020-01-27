import React, { Component } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Photo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container" style={{ width: "1200px"}}>
        <Slider {...settings}>
          {this.props.props.map((item, index) => (
            <div key={index}>
              <img src={item} alt={item} style={{ margin: "auto"}} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
