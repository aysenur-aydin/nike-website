const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-4 text-lg leading-none  border rounded-full  px-7 font-montserrat ${
        backgroundColor
          ? `${backgroundColor}${textColor}${borderColor}`
          : 'bg-coral-red border-coal-red  text-white'
      } `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
