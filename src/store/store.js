import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    cart: cartReducer,
  },
});

export default store;
