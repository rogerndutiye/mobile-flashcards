import { configureStore } from "@reduxjs/toolkit";

import deckReducer from "./deckSlice";

const store = configureStore({
  reducer: {
    deck: deckReducer,
  },
});

export default store;
