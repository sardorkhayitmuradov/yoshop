const Input = ({wrapperClassName, name , labelClassName, labelValue ,inputType, inputClassName , value , onGetValue, placeholder}) => {

  return (
    <div className={wrapperClassName}>
        {
            labelValue ? <label for={name} className={labelClassName}>{labelValue}</label>: ''
        }
        <input type={inputType} className={inputClassName} id={name} name={name} value={value} onChange={(e)=> onGetValue(e.target.value)} placeholder={placeholder} />
    </div>
  )
}

export default Input