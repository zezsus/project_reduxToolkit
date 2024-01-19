/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  }
);

interface ProductSate {
  listProduct: any;
  isLoading: boolean;
  isError: boolean;
}

const initialState = {
  listProduct: [],
  isLoading: true,
  isError: false,
} as ProductSate;

const ProductSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.listProduct = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default ProductSlice.reducer;
