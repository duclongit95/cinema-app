import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "redux/slice/cinemaSlice";
import userReducer from "redux/slice/userSlice";
import movieReducer from "redux/slice/movieSlice";

const store = configureStore({
  reducer: {
    cinemaReducer,
    userReducer,
    movieReducer,
  },
});

export default store;
