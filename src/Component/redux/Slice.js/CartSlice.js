import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export let CartSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {
    addProductToCart: (state, action) => {
      let check=state.find((pro)=> pro.id===action.payload.id);
      if (check) {
        check.quntity+=1;
      } else {
        let colneePro={...action.payload,quntity:1};
          state.push(colneePro);
          console.log("aaaaa");
      }
    
    },
    removeALLProductFromCart: (state, action) => {
      return [];
    },
    deleteProductFromCart: (state, action) => {
      return (state = state.filter((pro) => pro.id !== action.payload.id));
    },
  },
});

export let {
  addProductToCart,
  removeALLProductFromCart,
  deleteProductFromCart,
} = CartSlice.actions;

export default CartSlice.reducer;
