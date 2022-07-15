const Button = ({ name, style }) => {
  return (
    <>
      <button className={`${style} bg-[#5541D9] text-white rounded-sm`}>
        {name}
      </button>
    </>
  );
};

export default Button;
