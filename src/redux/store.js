import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import { loadState, savedState } from "../loadState";
const persistState = loadState();

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  persistState,
});
store.subscribe(() => {
  savedState(store.getState());
});
export default store;
