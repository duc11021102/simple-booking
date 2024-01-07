import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useContext } from "react"
import ScheduleContext from "../store/schedule-context"
import Popup from "../components/Popup"
import Sidebar from "../components/Sidebar"

const RootLayout = () => {
  const sheduleCtx = useContext(ScheduleContext)
  return (
    <>
      <Navbar />
      <main className="flex bg-rstone-100">
        <Sidebar />
        <Outlet />
        {sheduleCtx.isShowModal ? <Popup /> : null}
      </main>
    </>
  )
}
export default RootLayout
