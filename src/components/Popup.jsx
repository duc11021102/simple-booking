import SettingsBox from "./SettingsBox"
const Popup = () => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
    >
      <SettingsBox />
    </div>
  )
}

export default Popup
