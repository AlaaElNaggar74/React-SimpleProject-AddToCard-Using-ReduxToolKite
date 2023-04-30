import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./redux/Slice.js/ProductSlice";
import "./Products.css";
import { addProductToCart } from "./redux/Slice.js/CartSlice";

const ProductSingle = () => {
  let productsarr = useSelector((state) => state.product);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      {productsarr.map((product) => (
        <div
          key={product.id}
          className="singleProduct col-sm-6 col-md-4 col-lg-3 mb-3"
        >
          <div className="card">
            <img
              src={product.image}
              className="card-img-top w-100"
              alt={product.title.slice(0, 5)}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.slice(0, 10)}</h5>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h5 className="card-title">Price: {product.price}</h5>
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(addProductToCart(product));
                }}
              >
                Add To Card
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSingle;
