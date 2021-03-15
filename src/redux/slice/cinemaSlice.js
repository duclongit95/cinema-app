import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cinemaApi from "api/cinemaApi";

export const setCategoryGroupCinemaList = createAsyncThunk(
  "cinema/setCategoryGroupCinemaList",
  async () => {
    const result = await cinemaApi.getCategoryGroupCinemaList();
    return result.data;
  }
);

export const setGroupCinemaList = createAsyncThunk(
  "cinema/setGroupCinemaList",
  async (params) => {
    const result = await cinemaApi.getGroupCinemaList(params);
    return result.data[0].lstCumRap;
  }
);

const cinemaSlice = createSlice({
  name: "cinema",
  initialState: {
    categoryGroupCinemaList: [],
    groupCinemaList: [],
    groupCinemaMovieList: [],
  },
  reducers: {
    setGroupCinemaMovieList: (state, action) => {
      state.groupCinemaMovieList = action.payload;
    },
  },
  extraReducers: {
    [setCategoryGroupCinemaList.fulfilled]: (state, action) => {
      state.categoryGroupCinemaList = action.payload;
    },
    [setGroupCinemaList.fulfilled]: (state, action) => {
      state.groupCinemaList = action.payload;
    },
  },
});

export const { setGroupCinemaMovieList } = cinemaSlice.actions;
export default cinemaSlice.reducer;
