import { useContext } from "react"
import ScheduleContext from "../store/schedule-context"
const AddEditPage = () => {
  const scheduleCtx = useContext(ScheduleContext)
  const isOpen = scheduleCtx.openSide
  return (
    <div
      className={`px-10 py-4 w-full mt-12 bg-stone-50 min-h-screen ${
        isOpen ? "ml-72" : "ml-20"
      }`}
    >
      <h1 className="font-body text-2xl font-bold text-gray-700 mb-2 ">
        This is Add / Edit Page
      </h1>
    </div>
  )
}

export default AddEditPage
