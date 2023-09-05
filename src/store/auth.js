import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("CURRENT_USER")) || null,
};

const authSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    onSaveCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export default authSlice.reducer;

export const AuthActions = authSlice.actions;
