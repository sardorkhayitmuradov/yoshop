export default function PolicyCheckbox({id , value , onGetValue}) {
    return (
      <div className="policy">
        <input type="checkbox" id={id} value={value} onChange={(e) => onGetValue(e)} />
        <label htmlFor={id}><span></span></label>
      </div>
    )
  }