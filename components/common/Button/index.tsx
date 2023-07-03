import React from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
interface IButtonProps {
     children?: string | React.ReactNode;
     rightIcon?: React.ReactNode;
     leftIcon?: React.ReactNode;
     type?: "primary" | "text" | "outline"
     disabled?: boolean;
     className?: any;
     onClick?: () => void;
     href?: Url;
}
function Button({ className,
     disabled,
     children,
     onClick,
     type,
     rightIcon,
     leftIcon,
     href = "",
     ...rest }: IButtonProps) {
     const Comp = href ? Link : "button"
     const newClassName = `flex items-center justify-center  bg-white  min-w-[150px] py-3 ${className} ${disabled ? "opacity-50" : "hover:opacity-80 transition-opacity duration-200 "} ${type === "outline" ? "border-2 border-solid border-black !bg-transparent" : ""} ${type === "text" ? "!bg-transparent" : ""}`;
     return (
          <Comp
               href={href}
               disabled={disabled}
               className={newClassName}
               onClick={onClick}
               {...rest}
          >
               {leftIcon && <span className="mr-4 ">{leftIcon}</span>}
               {children}
               {rightIcon && <span className="ml-4">{rightIcon}</span>}
          </Comp>
     );
};

export default Button;