const BtnClick = (props) => {
  return (
    <button
      onClick={(value) => {
        props.onClick(value)
      }}
      className="py-1 text-base px-2 rounded-sm text-white bg-blue-700 border border-blue-400 hover:bg-blue-800 ease-out duration-200 "
    >
      {props.children}
    </button>
  )
}
export default BtnClick
