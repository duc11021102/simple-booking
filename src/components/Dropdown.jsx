import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6"
import { MdOutlineStorefront } from "react-icons/md"
import { FiMonitor } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
const Dropdown = (props) => {
  //data
  const options = props.options
  //handler dropdown
  const [isOpen, setIsOpen] = useState(false)
  //redux
  const isSideOpen = useSelector((state) => state.sideBar.isOpen)
  //translate
  const { t } = useTranslation()
  //css navlink
  const navClass =
    "block rounded-sm w-full text-left px-4 py-2 text-sm font-bold text-gray-700"

  // type icon
  let iconType = null
  if (props.typeIcon === "MdOutlineStorefront") {
    iconType = (
      <MdOutlineStorefront className="font-bold text-3xl  text-gray-700 " />
    )
  } else if (props.typeIcon === "FiMonitor") {
    iconType = <FiMonitor className="font-bold text-3xl  text-gray-700 " />
  }

  return (
    <div className="font-body  ">
      <div className="flex justify-center items-center px-4 py-2 gap-2  ">
        {iconType}

        {isSideOpen ? (
          <button
            type="button"
            className="inline-flex  justify-between items-center  w-full 
           bg-white text-base font-bold text-gray-700 focus:outline-none "
            onClick={() => setIsOpen(!isOpen)}
          >
            {t(`sidebar.${props.type}`)}
            <FaChevronDown className="font-bold text-sm" />
          </button>
        ) : null}
      </div>

      {isOpen && isSideOpen && (
        <div className="">
          <div className="py-1 flex flex-col gap-1">
            {options.map((option) => (
              <NavLink
                to={option.link}
                key={option.value}
                className={({ isActive }) =>
                  isActive
                    ? `${navClass} bg-gray-300`
                    : ` ${navClass}  hover:bg-gray-200 ease-out duration-200`
                }
              >
                {t(`${props.type}.${option.value}`)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
