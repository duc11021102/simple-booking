import ScheduleItem from "./ScheduleItem"
const ScheduleList = (props) => {
  const schedulesOfDay = props.schedulesOfDay
  return (
    <div className="flex flex-col gap-4 ml-20 overflow-scroll max-h-72 pt-3">
      {schedulesOfDay.map((schedule) => (
        <ScheduleItem schedule={schedule} key={schedule.id} />
      ))}
    </div>
  )
}

export default ScheduleList
