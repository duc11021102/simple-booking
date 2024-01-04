import BtnSelect from "./BtnSelect"
import BtnClick from "./BtnClick"
import data from "../utils/valueBtnSelect"
import ScheduleContext from "../store/schedule-context"
import { useCallback, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
const ScheduleBoxHeader = () => {
  //state
  const [year, setYear] = useState("2024")
  const [month, setMonth] = useState("all")
  //ctx
  const scheduleCtx = useContext(ScheduleContext)

  // handler value
  const changeValueYearHandler = useCallback((value) => {
    setYear(value)
  }, [])
  const changeValueMonthHandler = useCallback((value) => {
    setMonth(value)
  }, [])

  // handler setting
  const settingsHandler = useCallback(() => {
    scheduleCtx.showModal()
  }, [scheduleCtx])
  // handler read
  const readHandler = useCallback(() => {
    scheduleCtx.showHolidays()
  }, [scheduleCtx])
  // change all
  const changeAll = () => {
    scheduleCtx.setYear(year)
    scheduleCtx.setMonth(month)
  }
  //translate
  const { t } = useTranslation()
  return (
    <div className="flex flex-col font-body">
      <h1 className="font-body text-2xl font-bold text-gray-700 mb-2 ">
        {t("headerBox.title")}
      </h1>
      <section className="w-full bg-white border-2  rounded-md border-gray-200 pl-2 font-body">
        {/**section 1 */}
        <div className="flex flex-row my-8 gap-5">
          <div className="flex items-center gap-3 text-gray-700">
            <p>{t("headerBox.reservedItems")}:</p>
            <BtnSelect type="test" data={data.reverved} />
          </div>

          <div className="flex  items-center  gap-3 text-gray-700">
            <p>{t("headerBox.years")}:</p>
            <BtnSelect
              type="selectYear"
              onChangeValue={changeValueYearHandler}
              data={data.year}
            ></BtnSelect>
          </div>

          <div className="flex  items-center">
            <BtnClick onClick={changeAll}>{t("headerBox.change")}</BtnClick>
          </div>
        </div>
        {/**section 2 */}
        <div className="flex flex-row my-8  gap-5">
          <div className="flex">
            <p className="font-bold text-lg text-gray-700">
              {t("headerBox.test")}
            </p>
          </div>
        </div>
        {/**section 3 */}
        <div className="flex flex-row my-8  gap-5">
          <div className="flex  items-center gap-3 text-gray-700">
            <p>{t("headerBox.selectMonth")}:</p>
            <BtnSelect
              type="selectMonth"
              onChangeValue={changeValueMonthHandler}
              data={data.months}
            />
          </div>

          <div className="flex  items-center gap-3 text-gray-700">
            <p>{t("headerBox.selectWeek")}:</p>
            <BtnSelect type="selectWeek" data={data.weeks} />
          </div>

          <div className="flex  items-center  gap-3 text-gray-700">
            <BtnClick onClick={settingsHandler}>
              {t("headerBox.settings")}
            </BtnClick>
          </div>

          <div className="flex  items-center gap-3 text-gray-700">
            <p>{t("headerBox.national")}:</p>
            <BtnClick onClick={readHandler}>{t("headerBox.read")}</BtnClick>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScheduleBoxHeader
