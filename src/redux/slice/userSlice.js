import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const actLoginUser = createAsyncThunk("actLoginUser", async (data) => {
  const result = await userApi.login(data);
  localStorage.setItem("USER", JSON.stringify(result.data));
  console.log("AAA");

  return result.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("USER")) || {},
  },
  reducers: {
    actLogoutUser: (state, action) => {
      state.currentUser = {};
    },
  },
  extraReducers: {
    [actLoginUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { actLogoutUser } = userSlice.actions;
export default userSlice.reducer;
