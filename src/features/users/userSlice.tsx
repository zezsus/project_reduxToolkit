/** @format */

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../../store";

export interface UserState {
  listUser: any;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserState = {
  listUser: [],
  isLoading: true,
  isError: false,
};

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
  } catch (error: any) {
    const message = error.message;
    console.log(message);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllUser.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          state.listUser = action.payload;
          state.isLoading = false;
          state.isError = false;
        }
      )
      .addCase(getAllUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
