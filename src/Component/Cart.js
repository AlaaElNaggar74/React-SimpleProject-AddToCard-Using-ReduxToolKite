import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductFromCart,
  removeALLProductFromCart,
} from "./redux/Slice.js/CartSlice";

const Cart = () => {
  let cartarr = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let totoal=cartarr.reduce((acum,cart) =>{
    return acum+=cart.price * cart.quntity;
  },0)
  // let countt = 0;
  // cartarr.forEach((cart) => {
  //   countt += cart.price;
  // });
  // console.log("countt", countt);
  return (
    <div className="container">
      <div className="row">
        <div className="Cart">
          <h1 className="py-5 text-center">CART</h1>
          <div className="d-flex  my-5">
            <h2 className="me-3">To Clear All Product From Table :</h2>
            <button
              className="btn btn-info"
              onClick={() => {
                dispatch(removeALLProductFromCart());
              }}
            >
              CLEAR ALL
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="col-1">#</th>
                <th className="col-2">Title</th>
                <th className="col-2">Category</th>
                <th className="col-4">Description</th>
                <th className="col-1">Price</th>
                <th className="col-2">Image</th>
                {/* <th className="col-2">Count</th> */}

                <th className="col-1 text-center">Operation</th>
              </tr>
            </thead>
            <tbody>
              {cartarr.map((cart) => (
                <tr key={cart.id}>
                  <td className="col">{cart.id}</td>
                  <td className="col">{cart.title.slice(0, 30)}...</td>
                  <td className="col">{cart.category}</td>
                  <td className="col">{cart.description.slice(0, 100)}....</td>
                  <td className="col">{cart.price}</td>
                  <td className="col">
                    <img src={cart.image} alt="" />
                  </td>
                  <td className="col">{cart.quntity}</td>

                  <td className="col">
                    <div className="bttt text-center">
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                          dispatch(deleteProductFromCart(cart));
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1 className="text-center my-5">
            {" "}
            countt Price is: {totoal.toFixed(2)  }
          </h1>
          {/* <h1 className="text-center my-5">
            {" "}
            countt Price is: {countt.toFixed(2)}
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
