import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi"
import { useContext, useState, useEffect } from "react"
import ScheduleContext from "../store/schedule-context"
import { useTranslation } from "react-i18next"
const Navbar = () => {
  //context
  const sheduleCtx = useContext(ScheduleContext)
  // translate
  const { i18n } = useTranslation()

  //language state
  const [lang, setLang] = useState("English")

  // change language and not change current language when reload page
  const changLanguageHandler = (value) => {
    if (value === "English") {
      i18n.changeLanguage("en")
      localStorage.setItem("language", "en")
    } else if (value === "Japanese") {
      i18n.changeLanguage("ja")
      localStorage.setItem("language", "ja")
    }
  }
  //fix load page can change language button
  useEffect(() => {
    const currentLang = i18n.language
    if (currentLang === "en") {
      setLang("English")
    } else if (currentLang === "ja") {
      setLang("Japanese")
    }
  }, [i18n.language])

  return (
    <div className="w-full top-0 bg-white flex  justify-between items-center px-5 overflow-hidden fixed h-12 border-b-2 border-gray-200 ">
      {sheduleCtx.openSide ? (
        <FiChevronsLeft
          onClick={() => {
            sheduleCtx.setIsOpenSide(true)
          }}
          className="font-bold text-3xl mr-4 text-gray-700  hover:bg-gray-100 rounded-md "
        />
      ) : (
        <FiChevronsRight
          onClick={() => {
            sheduleCtx.setIsOpenSide(false)
          }}
          className="font-bold text-3xl mr-4 text-gray-700 hover:bg-gray-100 rounded-md  "
        />
      )}
      <select
        value={lang}
        onChange={(e) => {
          changLanguageHandler(e.target.value)
        }}
        className="p-1 rounded-sm border hover:text-sky-600 font-body focus:outline-none"
      >
        <option key="English" value="English">
          English
        </option>
        <option key="Japanese" value="Japanese">
          Japanese
        </option>
      </select>
    </div>
  )
}

export default Navbar
