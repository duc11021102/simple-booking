import { useState } from "react"
import React from "react"

const ScheduleContext = React.createContext({
  isYear: "2024",
  isMonth: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  isSetting: true,
  openSide: true,
  isShowModal: false,
  isShowHolidays: false,
  infoDay: {},
  //----------------
  schedules: [],
  setSchedules: () => {},
  addSchedule: () => {},
  deleteSchedule: () => {},
  deleteAll: () => {},
  //-----------------
  showModal: () => {},
  offModal: () => {},
  showSetting: () => {},
  offSetting: () => {},
  setYear: () => {},
  setMonth: () => {},
  setIsOpenSide: () => {},
  showHolidays: () => {},
  setInfoDay: () => {},
})

export const ScheduleContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [isOpenSide, setIsOpenSide] = useState(true)
  const [isSetting, setIsSetting] = useState(false)
  const [isYear, setIsYear] = useState("2024")
  const [showHolidays, setShowHolidays] = useState(false)
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
  const [schedules, setSchedules] = useState([])

  const showModalHandler = () => {
    setShowModal(true)
  }
  const offModalHandler = () => {
    setShowModal(false)
  }
  const showSettingHandler = () => {
    setIsSetting(true)
  }
  const offSettingHandler = () => {
    setIsSetting(false)
  }
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
  const setIsOpenSideHandler = (value) => {
    if (value === true) {
      setIsOpenSide(false)
    } else {
      setIsOpenSide(true)
    }
  }

  const showHolidayHandler = () => {
    setShowHolidays(!showHolidays)
  }

  const setInfoDayHandler = (value) => {
    setInfoDay(value)
  }

  //--------------------------
  const setSchedulesHandler = (value) => {
    setSchedules(value)
  }

  const addScheduleHandler = (value) => {
    setSchedules([...schedules, value])
  }

  const deleteScheduleHandler = (id) => {
    const updateSchedules = schedules.filter((schedule) => schedule.id != id)
    setSchedules(updateSchedules)
  }

  const deleteAllScheduleHandler = () => {
    setSchedules([])
  }
  //--------------------------
  return (
    <ScheduleContext.Provider
      value={{
        isSetting: isSetting,
        isYear: isYear,
        isMonth: isMonth,
        openSide: isOpenSide,
        isShowModal: showModal,
        isShowHolidays: showHolidays,
        infoDay: infoDay,
        schedules: schedules,
        setSchedules: setSchedulesHandler,
        addSchedule: addScheduleHandler,
        deleteSchedule: deleteScheduleHandler,
        deleteAllSchedule: deleteAllScheduleHandler,
        setInfoDay: setInfoDayHandler,
        showModal: showModalHandler,
        offModal: offModalHandler,
        showSetting: showSettingHandler,
        offSetting: offSettingHandler,
        setYear: setYearHandler,
        setMonth: setMonthHandler,
        setIsOpenSide: setIsOpenSideHandler,
        showHolidays: showHolidayHandler,
      }}
    >
      {props.children}
    </ScheduleContext.Provider>
  )
}
export default ScheduleContext
