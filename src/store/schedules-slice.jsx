import { createSlice } from "@reduxjs/toolkit"

const schedulesSlice = createSlice({
  name: "schedules",
  initialState: {
    schedules: [],
  },
  reducers: {
    setSchedules(state, action) {
      const schedules = action.payload
      state.schedules = schedules
    },
    addSchedule(state, action) {
      const newSchedule = action.payload
      state.schedules.push(newSchedule)
    },
    deleteSchedule(state, action) {
      const id = action.payload
      state.schedules = state.schedules.filter((schedule) => schedule.id != id)
    },
    deleteAllSchedule(state) {
      state.schedules = []
    },
  },
})

export const schedulesActions = schedulesSlice.actions

export default schedulesSlice
