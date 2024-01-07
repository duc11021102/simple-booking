// import React from 'react'
import { combineReducers } from "@reduxjs/toolkit"
import sideBarSlice from "./sideBar-slice"
const RootReducers = combineReducers({
  sideBar: sideBarSlice.reducer,
})

export default RootReducers
