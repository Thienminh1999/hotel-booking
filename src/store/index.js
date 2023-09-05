import { configureStore } from "@reduxjs/toolkit";
import datePickerReducer from "./datePickerModal";
import authReducer from "./auth";
import filterReducer from "./filterSearch";

const store = configureStore({
  reducer: {
    datePicker: datePickerReducer,
    auth: authReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
