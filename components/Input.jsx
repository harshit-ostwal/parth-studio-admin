const Input = ({ req, type, placeholder, className, updateValue, value, disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={req}
      disabled={disabled}
      value={value}
      onChange={updateValue}
      className={`py-3 p-2 rounded-[10px] hover:border-background border focus:border-background active:border-background outline-none duration-300 ${className}`}
    />
  );
};

export default Input;