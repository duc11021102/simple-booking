import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ScheduleContextProvider } from "./store/schedule-context.jsx"
import "../i18n.js"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { Provider } from "react-redux"
import store from "./store/index.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScheduleContextProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <App />
        </Provider>
      </LocalizationProvider>
    </ScheduleContextProvider>
  </React.StrictMode>
)
