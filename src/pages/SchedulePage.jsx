import CalendarBox from "../components/CalenderBox"
import ScheduleManagement from "../components/ScheduleBoxHeader"
import { useContext, useEffect } from "react"
import ScheduleContext from "../store/schedule-context"
const SchedulePage = () => {
  const scheduleCtx = useContext(ScheduleContext)
  const isOpen = scheduleCtx.openSide
  const show = scheduleCtx.isShowModal

  //stop scroll when open  popup
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [show])

  return (
    <div
      className={`px-10 py-4 w-full mt-12 bg-stone-50 min-h-screen ${
        isOpen ? "ml-72" : "ml-20"
      }`}
    >
      <ScheduleManagement />
      <CalendarBox />
    </div>
  )
}

export default SchedulePage
