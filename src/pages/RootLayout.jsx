import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Popup from "../components/Popup"
import { useContext } from "react"
import ScheduleContext from "../store/schedule-context"
const RootLayout = () => {
  const sheduleCtx = useContext(ScheduleContext)
  return (
    <>
      <Navbar />
      <main className="flex ">
        <Sidebar />
        <Outlet />
        {sheduleCtx.isShowModal ? <Popup /> : null}
      </main>
    </>
  )
}
export default RootLayout
