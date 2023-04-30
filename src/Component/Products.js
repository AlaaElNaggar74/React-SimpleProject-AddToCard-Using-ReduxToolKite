import React from "react";
import ProductSingle from "./ProductSingle";

const Products = () => {
  return (
    <div className="Products">
      <h1 className="py-5 text-center">PRODUCTS</h1>
      <div className="container">
        <div className="row">
          <ProductSingle />
        </div>
      </div>
    </div>
  );
};

export default Products;
