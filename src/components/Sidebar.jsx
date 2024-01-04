import Dropdown from "./Dropdown"
import { useContext } from "react"
import ScheduleContext from "../store/schedule-context"
const Sidebar = () => {
  const optionsStaff = [
    { value: "option1", label: "Option 1", link: "/option1" },
    { value: "option2", label: "Option 2", link: "/option1" },
    { value: "option3", label: "Option 3", link: "/option1" },
  ]

  const optionsSystem = [
    { value: "list", label: "List", link: "/list" },
    { value: "addEdit", label: "Add / Edit", link: "/add" },
    { value: "schedule", label: "Schedule", link: "/simple-booking-schedule" },
    { value: "settings", label: "Settings", link: "/settings" },
  ]
  const handleDropdownSelect = (selectedOption) => {
    console.log("Selected Option:", selectedOption)
  }

  const scheduleCtx = useContext(ScheduleContext)
  const isSideOpen = scheduleCtx.openSide

  return (
    <div
      className={`w-72 top-12 fixed h-screen border-r-2 border-gray-200 p-3 pl-1 flex flex-col gap-5 ease-in duration-100 transition-all ${
        !isSideOpen ? "w-fit" : null
      } `}
    >
      <Dropdown
        typeIcon="MdOutlineStorefront"
        options={optionsStaff}
        type="staff"
        onSelect={handleDropdownSelect}
      />
      <Dropdown
        typeIcon="FiMonitor"
        type="revervation"
        options={optionsSystem}
        onSelect={handleDropdownSelect}
      />
    </div>
  )
}
export default Sidebar
