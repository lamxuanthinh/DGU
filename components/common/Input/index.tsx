import { useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

interface Props {
  className?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  autoComplete?: string;
  name: string;
  errorMessage?: string;
  labelInput?: string;
  isShowPassword?: boolean;
}

export default function Input({
  className,
  type,
  placeholder,
  name,
  register,
  autoComplete,
  errorMessage,
  rules,
  labelInput,
  isShowPassword = false,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={`relative cursor-pointer ${className}`}>
      <div>
        <input
          type={
            type == "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          className={`${
            type == "password" ? "font-bold" : ""
          } bg-[#fff] shadow-inset-white text-[14px] px-5 py-3 w-full text-black border-[#52525233] border-2 rounded-md border-opacity-50 outline-none focus:border-black placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
          placeholder={placeholder}
          {...register(name, rules)}
          autoComplete={autoComplete}
          id={name}
        />
        {isShowPassword == true &&
          (isPasswordVisible ? (
            <BsFillEyeFill
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute top-4 right-4"
            />
          ) : (
            <BsFillEyeSlashFill
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute top-4 right-4"
            />
          ))}
        <label
          htmlFor={name}
          className="text-[14px] px-3 text-black text-opacity-80 bg-[#fff] absolute left-4 top-3.5 transition duration-300 input-text"
        >
          {labelInput}
        </label>
      </div>
      <div className="mt-1 px-5 text-red-600 min-h-[1.5rem] text-sm text-right">
        {errorMessage}
      </div>
    </div>
  );
}
