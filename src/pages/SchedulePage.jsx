import { lazy, useContext, useEffect, Suspense } from "react"
import ScheduleContext from "../store/schedule-context"
import CalendarBox from "../components/CalenderBox"
import ScheduleBoxHeader from "../components/ScheduleBoxHeader"
// const CalendarBox = lazy(() => import("../components/CalenderBox"))
// const ScheduleManagement = lazy(() => import("../components/ScheduleBoxHeader"))

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
      className={`px-10 py-4 w-full mt-12 bg-stone-100 min-h-screen ${
        isOpen ? "ml-72" : "ml-20"
      }`}
    >
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <ScheduleBoxHeader />
      <CalendarBox />
      {/* </Suspense> */}
    </div>
  )
}

export default SchedulePage
