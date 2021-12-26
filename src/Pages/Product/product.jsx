import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

function Product() {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const [product, setProduct] = useState();
  const params = useParams();

  async function getData() {
    let data = await fetch(`http://localhost:3001/products/${params.id}`);
    data = await data.json();
    setProduct(data);
  }

  useEffect(function () {
    getData();
    // eslint-disable-next-line
  }, []);

  return product ? (
    <section className="product-container">
      <div className="product-container__image">
        <img src={product.image} alt="" />
        <p className="product-container__descount">
          {Math.round(100 - (product.sellingPrice * 100) / product.listPrice)}%
        </p>
      </div>
      <div className="product-container__details">
        <p className="product-container__title">{product.title}</p>
        <p className="product-container__listPrice">
          {formatter.format(product.listPrice)}
        </p>
        <p className="product-container__sellingPrice">
          {formatter.format(product.sellingPrice)}
        </p>
        <p className="product-container__description">{product.description}</p>
        <button>Agregar al carrito</button>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Product;
