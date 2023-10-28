"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaFormProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextAreaForm: React.FC<TextAreaFormProps> = ({
  id,
  label,
  register,
  errors,
  value,
  required,
  disabled,
}) => {
  return (
    <div className="w-full relative h-40">
      <textarea
        id={id}
        value={value}
        disabled={disabled}
        {...register(id, { required })}
        className={`
        disabled:opacity-80 peer resize-none mt-4 w-full bg-neutral-500 ring-0 outline-none text-[20px] placeholder:neutral-500 text-white
        ${errors[id] ? "border-rose-600" : "border-melon"} 
        ${errors[id] ? "focus:border-rose-600" : "focus:border-black"}`}
      ></textarea>
      <label
        className={`absolute text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] text-black left-9
        ${errors[id] ? "text-rose-600" : ""}
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextAreaForm;
