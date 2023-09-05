import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowModal: false,
  dateSelected: null,
};

const datePickerModal = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    onOpenModal(state) {
      state.isShowModal = true;
    },
    onCloseModal(state) {
      state.isShowModal = false;
    },
    onChangeDateSelected(state, action) {
      state.dateSelected = action.payload;
    },
  },
});

export default datePickerModal.reducer;

export const DatePickerActions = datePickerModal.actions;
