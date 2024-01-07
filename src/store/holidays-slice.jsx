import { createSlice } from "@reduxjs/toolkit"

const holidaysSlice = createSlice({
  name: "holidays",
  initialState: {
    isShow: false,
  },
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow
    },
  },
})

export const holidaysAction = holidaysSlice.actions

export default holidaysSlice
