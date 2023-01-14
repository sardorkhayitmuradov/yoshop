const Input = ({wrapperClassName, name , labelClassName, labelValue ,inputType, inputClassName , value , onChange, placeholder}) => {
    const onGetValue = (e) => {
        onChange(e.target.value);
    };

  return (
    <div className={wrapperClassName}>
        {
            labelValue ? <label for={name} className={labelClassName}>{labelValue}</label>: ''
        }
        <input type={inputType} className={inputClassName} id={name} name={name} value={value} onChange={onGetValue} placeholder={placeholder} />
    </div>
  )
}

export default Input