import { useTranslation } from "react-i18next"

const BtnSelect = (props) => {
  const type = props.type
  //translate
  const { t } = useTranslation()
  const datas = props.data
  return (
    <select
      type="select"
      onChange={(e) => {
        props.onChangeValue(e.target.value)
      }}
      className="p-1 rounded-sm border border-gray-400 bg-stone-200 text-gray-700 font-body focus:outline-none "
    >
      {datas.map((data) => (
        <option
          className="font-body bg-white rounded-md p-3"
          key={data.value}
          value={data.value}
        >
          {t(`${type}.${data.name}`)}
        </option>
      ))}
    </select>
  )
}

export default BtnSelect
