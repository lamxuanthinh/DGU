import { useEffect, useState } from "react";
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
    animationBorder,
}: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) setIsMobile(true);
            else setIsMobile(false);
            if (window.innerWidth <= 1024) setIsTablet(true);
            else setIsTablet(false);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleFocus = () => {
        setIsFocus(true);
    };

    const handleBlur = () => {
        setIsFocus(false);
    };
    return (
        <div className={`relative cursor-pointer mb-8`}>
            <div
                className={`flex items-center h-[52px] rounded-xl overflow-hidden p-1 border border-solid border-black sm:border-none ${
                    !animationBorder ? "border-2 border-opacity-50 border-[#52525233] focus-within:border-black" : ""
                }`}
            >
                {animationBorder && (
                    <svg
                        height={52}
                        viewBox={isTablet ? (isMobile ? "0 0 610 55" : "0 0 600 50") : "0 0 470 52"}
                        className="absolute w-full left-0 top-0 pointer-events-none sm:block hidden"
                    >
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
                                    className=" lg:w-[468px] h-[55px] md:h-[50px] md:w-[590px]"
                                    width={590}
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
                            className=" lg:w-[468px] h-[55px] md:h-[50px] md:w-[590px]"
                            width={590}
                            fill="none"
                            mask="url(#border)"
                        />
                        <rect
                            x={1}
                            y={1}
                            rx={12}
                            ry={12}
                            strokeWidth={2}
                            stroke={"url(#gradient)"}
                            width={590}
                            fill="none"
                            mask="url(#border)"
                            pathLength={1}
                            strokeDasharray={1}
                            strokeDashoffset={0.92}
                            className={`${
                                isFocus ? "stroke-dashoffset-0" : ""
                            }  lg:w-[468px] h-[55px] md:h-[50px]  md:w-[590px] transi ion-stroke-dashoffset duration-700ease-in-out`}
                        />
                    </svg>
                )}
                <input
                    type={type == "password" ? (isPasswordVisible ? "text" : "password") : type}
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
        </div>
    );
}
