import React from "react";
import BannerImage from "../../images/banner.png";
import "../Banner/banner.css";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="main-banner">
      <Slider {...settings}>
        <a href="/">
          <img className="banIm" src={BannerImage} alt="Banner" />
        </a>
        <a href="/">
          <img className="banIm" src={BannerImage} alt="Banner" />
        </a>
        <a href="/">
          <img className="banIm" src={BannerImage} alt="Banner" />
        </a>
        <a href="/">
          <img className="banIm" src={BannerImage} alt="Banner" />
        </a>
      </Slider>
    </section>
  );
}

export default Banner;
