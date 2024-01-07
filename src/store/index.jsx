import { configureStore } from "@reduxjs/toolkit"
import RootReducers from "./RootReducers"

const store = configureStore({
  reducer: RootReducers,
})

export default store
