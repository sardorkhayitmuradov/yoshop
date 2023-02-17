export default function SaveCheckbox({id , value , onGetValue}) {
  return (
    <div className="save">
      <input type="checkbox" id={id} value={value} onChange={(e) => onGetValue(e)} />
      <label htmlFor={id}><span></span></label>
    </div>
  )
}