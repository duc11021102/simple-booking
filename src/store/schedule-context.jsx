import { useState } from "react"
import React from "react"

const ScheduleContext = React.createContext({
  isYear: "2024",
  isMonth: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  infoDay: {},
  setYear: () => {},
  setMonth: () => {},
  setInfoDay: () => {},
})

export const ScheduleContextProvider = (props) => {
  const [isYear, setIsYear] = useState("2024")
  const [isMonth, setIsMonth] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ])
  const [infoDay, setInfoDay] = useState({})

  const setYearHandler = (value) => {
    setIsYear(value)
  }

  const setMonthHandler = (value) => {
    if (value === "all") {
      setIsMonth([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ])
    } else {
      setIsMonth([value])
    }
  }

  const setInfoDayHandler = (value) => {
    setInfoDay(value)
  }

  return (
    <ScheduleContext.Provider
      value={{
        isYear: isYear,
        isMonth: isMonth,
        infoDay: infoDay,
        setInfoDay: setInfoDayHandler,
        setYear: setYearHandler,
        setMonth: setMonthHandler,
      }}
    >
      {props.children}
    </ScheduleContext.Provider>
  )
}
export default ScheduleContext
