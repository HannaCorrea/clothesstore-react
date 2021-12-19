import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/productCard";
import "../Showcase/showcase.css";

function Showcase() {
  const [products, setProducts] = useState();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  };

  async function getData() {
    let data = await fetch("http://localhost:3001/products");
    data = await data.json();
    setProducts(data);
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <section>
      <p className="showcase__title">PRODUCTOS MÁS BUSCADOS</p>
      <Slider {...settings}>
        {products &&
          products.map(function (product, index) {
            return (
              <ProductCard
                key={`product-${index}`}
                image={product.image}
                title={product.title}
                listPrice={product.listPrice}
                sellingPrice={product.sellingPrice}
                id={product.id}
              />
            );
          })}
      </Slider>
    </section>
  );
}

export default Showcase;
