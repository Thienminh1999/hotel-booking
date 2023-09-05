import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    city: "",
    startDate: null,
    endDate: null,
    adult: 0,
    children: 0,
    room: 0,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onSaveFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const FilterActions = filterSlice.actions;
