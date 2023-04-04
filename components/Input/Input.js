const Input = ({
  wrapperClassName,
  name,
  labelClassName,
  labelValue,
  inputType,
  inputClassName,
  value,
  onChange,
  placeholder,
  pattern,
  children,
  inputInnerWrapperClassName,
  maxLength
}) => {
  const onGetValue = (e) => {
    onChange(e.target.value);
  };

  console.log(inputType)

  return (
    <div className={wrapperClassName}>
      {labelValue ? (
        <label htmlFor={name} className={labelClassName}>
          {labelValue}
        </label>
      ) : ( 
        ""
      )}
      <div className={inputInnerWrapperClassName}>
        <input
          type={inputType}
          className={inputClassName}
          id={name}
          name={name}
          pattern={pattern ? pattern : ""}
          value={value ? value : ""}
          onChange={onGetValue}
          placeholder={placeholder ? placeholder: ""}
          maxLength={maxLength}
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
