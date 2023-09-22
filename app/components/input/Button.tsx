"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  outline?: boolean;
  disabled?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  outline,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled: opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 
      ${fullWidth ? "w-full" : "w-fit"}
      ${large ? "text-xl px-5 py-3" : "text-md py-2 px-4"}
      ${outline ? "bg-transparent border-isabelline text-isabelline" : ""}
      ${
        secondary
          ? "bg-isabelline text-black border-black"
          : "bg-melon text-isabelline border-melon"
      }`}
    >
      {Icon && <Icon size={24} className="absolute left-3 top-3" />}
      {label}
    </button>
  );
};

export default Button;
