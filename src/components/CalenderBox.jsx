import Calendar from "react-calendar"
import { useContext } from "react"
import "../../src/index.css"
import ScheduleContext from "../store/schedule-context"
import { useTranslation } from "react-i18next"
import data from "../utils/testData.jsx"
import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../store/popup-slice.jsx"
import { schedulesActions } from "../store/schedules-slice.jsx"
const CalendarBox = () => {
  //redux
  const dispatch = useDispatch()
  const isShowHolidays = useSelector((state) => state.holidays.isShow)
  // language
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  //context
  const scheduleCtx = useContext(ScheduleContext)
  const currentYear = scheduleCtx.isYear
  const curentMonth = scheduleCtx.isMonth
  // holidays
  const holidays = [
    { month: 1, day: 18 },
    { month: 2, day: 10 },
    { month: 3, day: 15 },
    { month: 4, day: 30 },
    { month: 5, day: 30 },
    { month: 6, day: 30 },
    { month: 7, day: 30 },
    { month: 8, day: 30 },
  ]
  // take all schedules
  const allSchedules = data.allSchedules

  // filter days onl
  const daysOpen = allSchedules.filter((day) => day.isOpen === true)
  const arrDayOnl = daysOpen.map((day) => day.day) //['Mon Jan 01 2024', 'Tue Jan 02 2024']

  // Hàm để kiểm tra xem một ngày có phải là ngày holiday không
  const isSpecialDay = (date) =>
    holidays.some(
      (specialDate) =>
        date.getMonth() + 1 === specialDate.month &&
        date.getDate() === specialDate.day
    )

  // Hàm để xác định lớp CSS của ngày
  const tileClassName = ({ date }) => {
    let className = "day"

    // Kiểm tra xem có phải là ngày đặc biệt không
    if (isSpecialDay(date) && isShowHolidays) {
      className += " holidays"
    }
    // Kiểm tra xem có phải là ngày thứ 7 không
    if (date.getDay() === 6) {
      className += " saturday-green"
    }
    // check if day onl
    if (arrDayOnl.includes(date.toDateString())) {
      className += " dayOpen"
    }
    return className
  }

  const customFormatYear = (locale, date) => {
    return new Intl.DateTimeFormat(locale, { month: "long" }).format(date)
  }

  // filter value - onclick day
  const onClickDayHandler = (value) => {
    dispatch(popupActions.openModal())
    const day = allSchedules.filter((day) => day.day === value.toDateString())
    // info of this day click
    scheduleCtx.setInfoDay(day[0])
    dispatch(schedulesActions.setSchedules(day[0].schedulesOfDay))
    // console.log(value.toDateString())
    // console.log(daysOpen)
    // console.log(arrDayOnl.includes(value.toDateString()))
  }

  return (
    <div className="grid grid-cols-3 3xl:grid-cols-4 gap-10 mt-10 w-fit ">
      {curentMonth.map((month) => (
        <div className="border border-gray-300 w-fit rounded-md" key={month}>
          <Calendar
            className="h-full "
            tileClassName={tileClassName}
            prevLabel=""
            nextLabel=""
            prev2Label=""
            next2Label=""
            minDetail="month"
            defaultView="month"
            onClickDay={onClickDayHandler}
            locale={currentLang}
            calendarType="iso8601"
            activeStartDate={new Date(currentYear, month - 1, 1)}
            showNeighboringMonth={false}
            formatMonthYear={customFormatYear}
          />
        </div>
      ))}
    </div>
  )
}
export default CalendarBox
