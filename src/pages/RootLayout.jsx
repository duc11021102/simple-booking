import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Popup from "../components/Popup"
import Sidebar from "../components/Sidebar"
import { useSelector } from "react-redux"
const RootLayout = () => {
  //redux
  const isOpenPopup = useSelector((state) => state.popup.isOpen)
  return (
    <>
      <Navbar />
      <main className="flex bg-rstone-100">
        <Sidebar />
        <Outlet />
        {isOpenPopup ? <Popup /> : null}
      </main>
    </>
  )
}
export default RootLayout
