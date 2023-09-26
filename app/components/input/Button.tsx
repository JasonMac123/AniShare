"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled: opacity-70 flex gap-4 justify-center disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 
      ${fullWidth ? "w-full" : "w-fit"}
      ${large ? "text-xl px-5 py-3" : "text-md py-2 px-4"}
      ${
        secondary
          ? "bg-white text-black border-white"
          : "bg-melon text-isabelline border-melon"
      }`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
