"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string;
  type?: string;
  disabled?: boolean;
}

const InputForm: React.FC<InputProps> = ({
  id,
  label,
  errors,
  register,
  value,
  type,
  disabled,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        value={value}
        {...register(id)}
        placeholder=" "
        type={type}
        className={`w-full peer p-4 pt-6 text-lg bg-silver border-2 rounded-md outline-none text-isabelline focus:border-2 disabled:bg-red-300 disabled:opacity-70 disabled:cursor-not-allowed

        ${errors[id] ? "border-rose-600" : "border-melon"} 
        ${errors[id] ? "focus:border-rose-600" : "focus:border-black"}`}
      />
      <label
        className={`absolute text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] 
        ${errors[id] ? "text-rose-600" : ""}
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputForm;
