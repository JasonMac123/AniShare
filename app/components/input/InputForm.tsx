"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputProps> = ({
  id,
  errors,
  register,
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      id={id}
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="w-full p-4 text-lg bg-silver border-2 border-darkGray rounded-md outline-none text-isabelline focus:border-melon focus:border-2 disabled:bg-red-300 disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default InputForm;
