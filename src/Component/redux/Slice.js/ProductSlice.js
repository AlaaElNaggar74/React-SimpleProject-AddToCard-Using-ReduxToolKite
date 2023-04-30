import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "ProductSlice/fetchProduct",
  async () => {
    let res = await fetch("http://localhost:9000/Products");
    let data = await res.json();
    return data;
  }
);

export let ProductSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: () => {},
    deleteProduct: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export let { addProduct, removeProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
