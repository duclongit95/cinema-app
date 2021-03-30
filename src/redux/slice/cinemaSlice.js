import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cinemaApi from "api/cinemaApi";

export const categoryGroupCinemaListAct = createAsyncThunk(
  "cinema/setCategoryGroupCinemaList",
  async () => {
    const result = await cinemaApi.getCategoryGroupCinemaListApi();
    return result.data;
  }
);

export const groupCinemaListAct = createAsyncThunk(
  "cinema/setGroupCinemaList",
  async (params) => {
    const result = await cinemaApi.getGroupCinemaListApi(params);
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
      const cGroupCinemaList = [...state.groupCinemaList];

      const index = state.groupCinemaList.findIndex(
        (item) => item.maCumRap === action.payload
      );
      state.groupCinemaMovieList = cGroupCinemaList[index].danhSachPhim;
    },
  },
  extraReducers: {
    [categoryGroupCinemaListAct.fulfilled]: (state, action) => {
      state.categoryGroupCinemaList = action.payload;
    },
    [groupCinemaListAct.fulfilled]: (state, action) => {
      state.groupCinemaList = action.payload;
    },
  },
});

export const { setGroupCinemaMovieList } = cinemaSlice.actions;
export default cinemaSlice.reducer;
