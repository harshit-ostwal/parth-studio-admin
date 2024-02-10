const Input = ({ req, type, placeholder, className, updateValue, value, disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={req}
      disabled={disabled}
      value={value}
      onChange={updateValue}
      className={`py-3 p-2 font-Gilroy rounded-[10px] hover:border-primary-text focus:outline-none border active:border-primary-text focus:border-secondary ${className}`}
    />
  );
};

export default Input;