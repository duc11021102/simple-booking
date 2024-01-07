import { useContext, useEffect } from "react"
import ScheduleContext from "../store/schedule-context"
import CalendarBox from "../components/CalenderBox"
import ScheduleBoxHeader from "../components/ScheduleBoxHeader"
import { useSelector } from "react-redux"
const SchedulePage = () => {
  //ctx
  const scheduleCtx = useContext(ScheduleContext)
  const show = scheduleCtx.isShowModal
  // redux
  const isOpenSide = useSelector((state) => state.sideBar.isOpen)
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
      className={`px-10 py-4 w-full mt-12 bg-stone-100 min-h-screen ${
        isOpenSide ? "ml-72" : "ml-20"
      }`}
    >
      <ScheduleBoxHeader />
      <CalendarBox />
    </div>
  )
}

export default SchedulePage
