function InputCheckbox({type, idName, inptClass, labelText, labelClass, inputName}) {
  return (
    <>
      <input
        type={type}
        id={idName}
        className={inptClass}
        name={inputName}
      />
      <label htmlFor={idName} className={labelClass}>
        {labelText}
      </label>
    </>
  );
}

export default InputCheckbox;
