"use client";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="w-full p-4 text-lg bg-silver border-2 border-darkGray rounded-md outline-none text-isabelline focus:border-melon focus:border-2 disabled:bg-red-300 disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
