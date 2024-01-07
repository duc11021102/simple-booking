import { combineReducers } from "@reduxjs/toolkit"
import sideBarSlice from "./sideBar-slice"
import popupSlice from "./popup-slice"
import holidaysSlice from "./holidays-slice"
import schedulesSlice from "./schedules-slice"
const RootReducers = combineReducers({
  sideBar: sideBarSlice.reducer,
  popup: popupSlice.reducer,
  holidays: holidaysSlice.reducer,
  schedules: schedulesSlice.reducer,
})

export default RootReducers
