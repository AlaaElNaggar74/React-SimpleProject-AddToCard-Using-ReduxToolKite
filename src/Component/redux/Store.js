// import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice.js/ProductSlice"
import CartReducer from "./Slice.js/CartSlice";
export let store=configureStore({
  reducer:{
    product:ProductReducer,
    cart:CartReducer,

  }
})
