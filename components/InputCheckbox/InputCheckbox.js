function InputCheckbox({type, idName, inptClass, labelText, labelClass, inputName, onChange , check}) {

  const onGetValue = (e) => {
    onChange(e.target.id)
  }
  return (
    <>
      <input
        type={type}
        id={idName}
        className={inptClass}
        name={inputName}
        onChange={onGetValue}
      />
      <label htmlFor={idName} className={labelClass}>
        {labelText}
      </label>
    </>
  );
}

export default InputCheckbox;
