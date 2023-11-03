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
    errorMessageUtils?: any;
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
    animationBorder,
    errorMessageUtils,
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
            <div
                className={`flex items-center h-[52px] rounded-xl overflow-hidden p-1 ${
                    !animationBorder ? "border-2 border-opacity-50 border-[#52525233] dark:border-[#9f9f9f]" : ""
                }`}
            >
                {animationBorder && (
                    <svg height={50} className="absolute w-full left-0 top-0 pointer-events-none">
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(10)">
                                <stop offset="5%" stopColor="#29fb65" />
                                <stop offset="95%" stopColor="#77a7fa" />
                            </linearGradient>
                            <mask id="border">
                                <rect
                                    x={1}
                                    y={1}
                                    rx={12}
                                    ry={12}
                                    strokeWidth={2}
                                    stroke="#ccc"
                                    className="customInputRect"
                                    fill="none"
                                    pathLength={1}
                                    strokeDasharray={1}
                                    strokeDashoffset={-0.08}
                                    id="border"
                                />
                            </mask>
                        </defs>
                        <rect
                            x={1}
                            y={1}
                            rx={12}
                            ry={12}
                            strokeWidth={2}
                            stroke="#ccc"
                            fill="none"
                            className="customInputRect"
                            mask="url(#border)"
                        />
                        <rect
                            x={1}
                            y={1}
                            rx={12}
                            ry={12}
                            strokeWidth={2}
                            stroke={"url(#gradient)"}
                            fill="none"
                            mask="url(#border)"
                            pathLength={1}
                            strokeDasharray={1}
                            strokeDashoffset={0.92}
                            className={`${
                                isFocus ? "stroke-dashoffset-0" : ""
                            } transition-stroke-dashoffset duration-700 ease-in-out customInputRect`}
                        />
                    </svg>
                )}
                <input
                    type={type == "password" ? (isPasswordVisible ? "text" : "password") : type}
                    className={`
             shadow-inset-white dark:shadow-[#1a1a1a] text-[14px] px-5 py-3 w-full text-black dark:text-white rounded-md outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200
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
                            className="absolute top-[50%] right-4 -translate-y-1/2"
                        />
                    ) : (
                        <BsFillEyeSlashFill
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            className="absolute top-[50%] right-4 -translate-y-1/2"
                        />
                    ))}
                <label
                    htmlFor={name}
                    className={`text-[14px] px-3 text-black dark:text-white bg-white dark:bg-[#1c1c1c] text-opacity-80 absolute left-4 top-[14px] transition duration-300 input-text h-7 z-2`}
                >
                    {labelInput}
                </label>
            </div>
            {
                <div className="absolute bottom-[-30px] right-0 text-red-600 min-h-[1.5rem] text-sm text-right">
                    {errorMessage} {errorMessageUtils}
                </div>
            }
        </div>
    );
}
