import React, { ButtonHTMLAttributes } from "react";
interface IButtonProps {
     children?: string | React.ReactNode;
     rightIcon?: React.ReactNode;
     leftIcon?: React.ReactNode;
     type?: "primary" | "text" | "outline"
     disabled?: boolean;
     className?: any;
     onClick?: () => void;
}
function Button({ className,
     disabled,
     children,
     onClick,
     type,
     rightIcon,
     leftIcon,
     ...rest }: IButtonProps) {
     const newClassName = `flex items-center justify-center  bg-white  min-w-[150px] py-3 ${className} ${disabled ? "opacity-50" : "hover:opacity-80 transition-opacity duration-200 "} ${type === "outline" ? "border-2 border-solid border-black !bg-transparent" : ""} ${type === "text" ? "!bg-transparent" : ""}`;
     return (
          <button
               disabled={disabled}
               className={newClassName}
               onClick={onClick}
               {...rest}
          >
               {leftIcon && <span className="mr-4 ">{leftIcon}</span>}
               {children}
               {rightIcon && <span className="ml-4">{rightIcon}</span>}
          </button>
     );
};

export default Button;