import { Stack, TextField, Button } from "@mui/material"
import { TimeField } from "@mui/x-date-pickers"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { schedulesActions } from "../store/schedules-slice"
const ScheduleItem = (props) => {
  //redux
  const dispatch = useDispatch()
  const schedule = props.schedule

  //state content of one schedule
  const [timeStart, setTimeStart] = useState(schedule.startTime)
  const [timeEnd, setTimeEnd] = useState(schedule.endTime)
  const [subject, setSubject] = useState(schedule.subject)
  const [body, setBody] = useState(schedule.body)

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
        spellCheck="false"
        size="small"
        className=" w-48"
        id="outlined-required"
        label="Subject"
        value={subject}
        onChange={(newValue) => {
          setSubject(newValue)
        }}
        variant="outlined"
        inputProps={{ style: { fontWeight: 600 } }}
      />
      <TextField
        spellCheck="false"
        required
        size="small"
        className="w-full"
        id="outlined-required"
        label="Body"
        value={body}
        onChange={(newValue) => {
          setBody(newValue)
        }}
        variant="outlined"
      />
      <Button
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          border: "1px solid #ef4444",
          width: "120px",
        }}
        onClick={() => dispatch(schedulesActions.deleteSchedule(schedule.id))}
        size="medium"
        variant="outlined"
      >
        Delete
      </Button>
    </Stack>
  )
}

export default ScheduleItem
