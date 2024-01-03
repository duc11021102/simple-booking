import { Stack, TextField, Button } from "@mui/material"
import { TimeField } from "@mui/x-date-pickers"
import { useState, useContext } from "react"
import ScheduleContext from "../store/schedule-context"
const ScheduleItem = (props) => {
  const [timeStart, setTimeStart] = useState(null)
  const [timeEnd, setTimeEnd] = useState(null)
  // ctx
  const scheduleCtx = useContext(ScheduleContext)
  const schedule = props.schedule

  return (
    <Stack direction="row" spacing={2} sx={{}}>
      <TimeField
        className="font-body w-40"
        label="Start Time"
        slotProps={{ textField: { size: "small" } }}
        value={timeStart}
        onChange={(newValue) => {
          setTimeStart(newValue)
        }}
        format="HH:mm"
      />
      <TimeField
        className="font-body w-40"
        label="End Time"
        slotProps={{ textField: { size: "small" } }}
        value={timeEnd}
        onChange={(newValue) => {
          setTimeEnd(newValue)
        }}
        format="HH:mm"
      />
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
      <Button
        onClick={() => {
          scheduleCtx.deleteSchedule(schedule.id)
        }}
        size="medium"
        variant="outlined"
        color="error"
      >
        Delete
      </Button>
    </Stack>
  )
}

export default ScheduleItem
