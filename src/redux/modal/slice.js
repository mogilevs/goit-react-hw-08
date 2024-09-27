import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsOpen: false,
  },
  reducers: {
    setModal(state, action) {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
