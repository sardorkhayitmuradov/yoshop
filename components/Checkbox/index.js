export default function Checkbox({id , value , onGetValue , checkboxClass}) {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} value={value} onChange={(e) => onGetValue(e)} />
      <label htmlFor={id}><span></span></label>
    </div>
  )
}
