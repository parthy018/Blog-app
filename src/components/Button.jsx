
function Button({
  children,
  type = "button",
  bgColor = "bg-glassWhite bg-opacity-20", // Default glassmorphism background
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg backdrop-blur-md backdrop-saturate-150 shadow-lg border border-glassWhite transition-all ease-in-out duration-200 hover:bg-opacity-30 hover:backdrop-blur-lg hover:shadow-xl ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
