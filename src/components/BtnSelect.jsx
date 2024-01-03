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
      className="p-1 rounded-sm border hover:text-sky-600 font-body focus:outline-none"
    >
      {datas.map((data) => (
        <option className="font-body" key={data.value} value={data.value}>
          {t(`${type}.${data.name}`)}
        </option>
      ))}
    </select>
  )
}

export default BtnSelect
