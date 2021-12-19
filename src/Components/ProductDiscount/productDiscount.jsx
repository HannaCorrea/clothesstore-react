import React from "react";
import "./productDiscount.css";

function ProductDiscount({ sellingPrice, listPrice }) {
  return (
    sellingPrice < listPrice && (
      <span className="discountBox">
        {Math.round(100 - (sellingPrice * 100) / listPrice)}%
      </span>
    )
  );
}

export default ProductDiscount;
