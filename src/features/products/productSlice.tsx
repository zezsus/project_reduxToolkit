/** @format */

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  }
);

interface ProductSate {
  listProduct: any;
  listCart: any;
  numberProduct: number;
  isLoading: boolean;
  isError: boolean;
}

const initialState = {
  listProduct: [],
  listCart: [],
  isLoading: true,
  isError: false,
  numberProduct: 0,
} as ProductSate;

const ProductSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.numberProduct += 1;
      state.listCart.push(action.payload);
    },
    removeToCart: (state) => {
      state.numberProduct -= 1;
    },
    getCartItem: (state) => {
      console.log("cartItem", state.listCart);

      return state.listCart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.listProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addToCart, getCartItem } = ProductSlice.actions;

export default ProductSlice.reducer;
