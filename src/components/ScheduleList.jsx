import ScheduleItem from "./ScheduleItem"
// import classes from "../styles/scrollBar.module.css"
const ScheduleList = (props) => {
  const schedulesOfDay = props.schedulesOfDay
  return (
    <div
      className={`flex flex-col gap-4 ml-20 mr-10  overflow-y-auto max-h-72 pt-3`}
    >
      {schedulesOfDay.map((schedule) => (
        <ScheduleItem schedule={schedule} key={schedule.id} />
      ))}
    </div>
  )
}

export default ScheduleList
