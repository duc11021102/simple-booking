import ScheduleList from "./ScheduleList"
import ScheduleContext from "../store/schedule-context"
import { useContext, useState } from "react"
import { TextField } from "@mui/material"
const SettingsBox = () => {
  const scheduleCtx = useContext(ScheduleContext)
  // get value of this day
  const day = scheduleCtx.infoDay
  // get all schedules of this day
  const schedulesOfDay = scheduleCtx.schedules

  // handler open off schedules
  const isOpenSchedules = day.isOpen
  const [isOpen, setIsOpen] = useState(isOpenSchedules)

  return (
    <div className="w-fit rounded-md bg-white px-5 pt-10 pb-4 font-body flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <input
          className="form-radio h-6 w-6 text-indigo-600 "
          type="radio"
          name=""
          id=""
          checked={isOpen}
          onChange={() => {
            setIsOpen(true)
          }}
        />
        <h1 className="font-semibold text-lg text-gray-700">Open</h1>
      </div>
      {isOpen && <ScheduleList schedulesOfDay={schedulesOfDay}></ScheduleList>}
      {/** btn add schedule item */}
      {isOpen && (
        <div className="flex font-body ml-20">
          <button
            onClick={() =>
              scheduleCtx.addSchedule({
                id: Math.random.toString,
                startTime: "09:30",
                endTime: "10:30",
                subject: "",
                body: "",
              })
            }
            className="text-lg  text-sky-600 border-sky-600 border hover:bg-sky-200 ease-out duration-200   px-16 py-0 rounded-sm"
          >
            Add
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <input
          className="form-radio h-6 w-6 text-indigo-600 "
          type="radio"
          name=""
          id=""
          checked={!isOpen}
          onChange={() => {
            setIsOpen(false)
          }}
        />
        <h1 className="font-semibold text-lg text-gray-700">Off</h1>
      </div>
      {!isOpen && (
        <div className="flex font-body ml-20 gap-4">
          <TextField
            required
            size="small"
            className=" w-40"
            id="outlined-required"
            label="Subject"
            variant="outlined"
            inputProps={{ style: { fontWeight: 600 } }}
          />
          <TextField
            required
            size="small"
            className="w-96"
            id="outlined-required"
            label="Body"
            variant="outlined"
          />
        </div>
      )}

      {/** bottom */}
      <div className="flex font-body gap-4 justify-center items-center mt-6">
        <button
          onClick={() => {
            scheduleCtx.offModal()
          }}
          className="text-xl  text-stone-600 border-stone-600 border hover:bg-stone-200 ease-out duration-200   px-16 py-1 rounded-sm"
        >
          Cancel
        </button>

        <button className="text-xl  text-sky-600 border-sky-600 border hover:bg-sky-200 ease-out duration-200   px-16 py-1 rounded-sm">
          Apply
        </button>
      </div>
    </div>
  )
}

export default SettingsBox
