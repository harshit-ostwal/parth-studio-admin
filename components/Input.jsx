const Input = ({ type, placeholder, className, value }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={e => value(e.target.value)} className={`py-3 p-2 font-VisbyRoundMedium rounded-[10px] w-[80%] focus:outline-none border active:border-secondary focus:border-secondary ${className}`} />
    </>
  );
}

export default Input;