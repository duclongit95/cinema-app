import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "redux/slice/cinemaSlice";

const store = configureStore({
  reducer: {
    cinemaReducer,
  },
});

export default store;
