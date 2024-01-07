import { createSlice } from "@reduxjs/toolkit"

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const sideBarActions = sideBarSlice.actions

export default sideBarSlice
