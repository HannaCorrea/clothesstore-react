import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import ProductDiscount from "../ProductDiscount/productDiscount";

function ProductCard({ image, title, sellingPrice, listPrice, id }) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <article className="product-card">
      <Link to={`/product/${id}`}>
        <ProductDiscount sellingPrice={sellingPrice} listPrice={listPrice} />
        <img className="product-card__image" src={image} alt="" />
        <div className="product-card__description">
          <p className="product-card__title">{title}</p>
          <div className="product-card__pricesContainer">
            <p className="product-card__sellingPrice">
              {formatter.format(sellingPrice)}
            </p>
            {sellingPrice < listPrice && (
              <p className="product-card__listPrice">
                {formatter.format(listPrice)}
              </p>
            )}
          </div>
          <button>
            <i className="fas fa-shopping-cart"></i> Agregar al carrito
          </button>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
