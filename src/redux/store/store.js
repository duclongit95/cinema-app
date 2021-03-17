import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "redux/slice/cinemaSlice";
import userReducer from "redux/slice/userSlice";

const store = configureStore({
  reducer: {
    cinemaReducer,
    userReducer,
  },
});

export default store;
