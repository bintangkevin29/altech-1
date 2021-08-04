import React from "react";

interface CustomButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  buttonLink?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  buttonLink = false,
  ...props
}) => {
  return (
    <button
      className={`button ${buttonLink ? "button--link" : ""}
      ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
