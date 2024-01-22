/** @format */

import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
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
} as ProductSate;

const ProductSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<any>) => {
      const searchValue = action.payload;
      if (searchValue !== "") {
        state.listProduct = state.listProduct.filter(
          (item: any) => item.title === searchValue
        );
      } else {
        return state.listProduct;
      }
    },

    addToCart: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.listCart.push(action.payload);
      }
    },

    removeToCart: (state, action: PayloadAction<any>) => {
      const itemToRemove = action.payload;
      state.listCart = state.listCart = state.listCart.filter(
        (item: any) => item.id !== itemToRemove.id
      );
    },

    getCartItem: (state) => {
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

export const { searchProduct, addToCart, getCartItem, removeToCart } =
  ProductSlice.actions;

export default ProductSlice.reducer;
