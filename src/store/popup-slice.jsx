import { createSlice } from "@reduxjs/toolkit"

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal(state) {
      state.isOpen = true
    },
    closeModal(state) {
      state.isOpen = false
    },
  },
})
export const popupActions = popupSlice.actions

export default popupSlice
