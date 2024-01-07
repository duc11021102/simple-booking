import ScheduleList from "./ScheduleList"
import ScheduleContext from "../store/schedule-context"
import { useContext, useState } from "react"
import { TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../store/popup-slice"
import { schedulesActions } from "../store/schedules-slice"
const SettingsBox = () => {
  //redux
  const dispatch = useDispatch()
  const schedulesOfDay = useSelector((state) => state.schedules.schedules)
  //ctx
  const scheduleCtx = useContext(ScheduleContext)
  // get value of this day
  const day = scheduleCtx.infoDay

  // handler open off schedules
  const isOpenSchedules = day.isOpen
  const [isOpen, setIsOpen] = useState(isOpenSchedules)
  // remove all schdule
  const removeAllHandler = () => {
    setIsOpen(false)
    dispatch(schedulesActions.deleteAllSchedule())
  }
  return (
    <div className="w-2/3 h-2/3 rounded-md bg-white px-5 pt-10 pb-4 relative font-body flex flex-col gap-5">
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
              dispatch(
                schedulesActions.addSchedule({
                  id: Math.random().toString(),
                  startTime: new Date("2024-01-02T10:30:00+07:00"),
                  endTime: new Date("2024-01-02T11:30:00+07:00"),
                  subject: "Test",
                  body: "This is Test Body",
                })
              )
            }
            className="text-lg  text-white  bg-blue-700 hover:bg-blue-800 ease-out duration-200  px-16 py-0 rounded-sm"
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
          onChange={removeAllHandler}
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
      <div className="flex w-full  absolute bottom-8 font-body gap-4 justify-center items-center">
        <button
          onClick={() => {
            dispatch(popupActions.closeModal())
          }}
          className="text-xl  text-gray-700 border border-gray-400 bg-stone-300 hover:bg-stone-400 ease-out duration-200   px-16 py-1 rounded-sm"
        >
          Cancel
        </button>

        <button className="text-xl  text-white bg-blue-700  hover:bg-blue-800 ease-out duration-200  px-16 py-1 rounded-sm">
          Apply
        </button>
      </div>
    </div>
  )
}

export default SettingsBox
