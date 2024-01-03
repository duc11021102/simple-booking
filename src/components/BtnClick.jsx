const BtnClick = (props) => {
  return (
    <button
      onClick={(value) => {
        props.onClick(value)
      }}
      className="py-1 text-sm px-2 rounded-sm text-sky-600 border-sky-600 border hover:bg-sky-200 ease-out duration-200"
    >
      {props.children}
    </button>
  )
}
export default BtnClick
