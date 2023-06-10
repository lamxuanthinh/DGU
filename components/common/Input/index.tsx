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
  animationBorder?: boolean;
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
  animationBorder
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div className={`relative cursor-pointer mb-8`}>
      <div className={`flex items-center h-[52px] border-2 border-opacity-50 border-[#52525233] rounded-md overflow-hidden p-1
      ${isFocus && animationBorder ? "box-animation " : "focus-within:border-black"}`}>
        {animationBorder && <span className="absolute w-16 h-2 top-0 left-[20px] bg-[#fff] "></span>}
        <input
          type={
            type == "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          className={`
             bg-[#fff] shadow-inset-white text-[14px] px-5 py-3 w-full text-black rounded-md outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200
             ${type == "password" ? "font-bold" : ""}
             ${animationBorder ? "py-[6px] " : ""}
             ${className}`}
          placeholder={placeholder}
          {...register(name, rules)}
          autoComplete={autoComplete}
          id={name}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
          className={`text-[14px] px-3 text-black text-opacity-80 bg-[#fff] absolute left-4 top-[14px] transition duration-300 input-text h-7 z-2`}
        >
          {labelInput}
        </label>
      </div>
      {
        <div className="absolute bottom-[-30px] right-0 text-red-600 min-h-[1.5rem] text-sm text-right">
          {errorMessage}
        </div>
      }
    </div >
  );
}
