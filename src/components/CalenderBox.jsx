import Calendar from "react-calendar"
import { useContext } from "react"
import "../../src/index.css"
import ScheduleContext from "../store/schedule-context"
import { useTranslation } from "react-i18next"
import data from "../utils/testData.jsx"
const CalendarBox = () => {
  // language
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  //context
  const scheduleCtx = useContext(ScheduleContext)
  const currentYear = scheduleCtx.isYear
  const curentMonth = scheduleCtx.isMonth
  // holidays
  const holidays = [
    { month: 1, day: 1 },
    { month: 2, day: 10 },
    { month: 3, day: 15 },
    { month: 4, day: 30 },
    { month: 5, day: 30 },
    { month: 6, day: 30 },
    { month: 7, day: 30 },
    { month: 8, day: 30 },
  ]
  // Hàm để kiểm tra xem một ngày có phải là ngày holiday không
  const isSpecialDay = (date) =>
    holidays.some(
      (specialDate) =>
        date.getMonth() + 1 === specialDate.month &&
        date.getDate() === specialDate.day
    )
  // Hàm để xác định lớp CSS của ngày
  const tileClassName = ({ date }) => {
    let className = ""

    // Kiểm tra xem có phải là ngày đặc biệt không
    if (isSpecialDay(date) && scheduleCtx.isShowHolidays) {
      className += "holidays"
    }
    // Kiểm tra xem có phải là ngày thứ 7 không
    if (date.getDay() === 6) {
      className += " saturday-green"
    }

    return className
  }

  // const customFormatDay = (locale, date) => {
  //   return date.toLocaleDateString(locale, {
  //     day: "numeric",
  //     month: "numeric",
  //   })
  // }

  const customFormatYear = (locale, date) => {
    return new Intl.DateTimeFormat(locale, { month: "long" }).format(date)
  }

  // filter value - onclick day
  const allSchedules = data.allSchedules

  const onClickDayHandler = (value) => {
    scheduleCtx.showModal()
    const day = allSchedules.filter((day) => day.day === value.toDateString())
    // info of this day click
    scheduleCtx.setInfoDay(day[0])
    scheduleCtx.setSchedules(day[0].schedulesOfDay)
    console.log(value.getDay())
    // console.log(day[0])
  }

  return (
    <div className="grid grid-cols-3 3xl:grid-cols-4 gap-10 mt-10 w-fit ">
      {curentMonth.map((month) => (
        <div className="border border-gray-300 w-fit rounded-md" key={month}>
          <Calendar
            className="h-full"
            tileClassName={tileClassName}
            prevLabel=""
            nextLabel=""
            prev2Label=""
            next2Label=""
            minDetail="month"
            defaultView="month"
            onClickDay={onClickDayHandler}
            locale={currentLang}
            // locale="ja"
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
