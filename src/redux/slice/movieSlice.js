import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "api/movieApi";

export const getDetailMovieApiAct = createAsyncThunk(
  "movie/getDetailMovieApiAct",
  async (params) => {
    const result = await movieApi.getDetailMovieAPI(params);

    return result.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    detailMovie: {},
  },
  reducers: {},
  extraReducers: {
    [getDetailMovieApiAct.fulfilled]: (state, action) => {
      state.detailMovie = action.payload;
    },
  },
});

export default movieSlice.reducer;
