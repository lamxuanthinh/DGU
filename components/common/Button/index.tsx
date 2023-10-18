import React from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IButtonProps {
    children?: string | React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    type?: "primary" | "text" | "outline" | "submit";
    disabled?: boolean;
    className?: any;
    isLoading?: boolean;
    onClick?: (e: any) => void;
    href?: Url;
}

function Button({
    className,
    disabled,
    children,
    onClick,
    type,
    rightIcon,
    isLoading,
    leftIcon,
    href = "",
    ...rest
}: IButtonProps) {
    const Comp = href ? Link : "button";
    const newClassName = `flex items-center justify-center ${className} 
     ${disabled || isLoading ? "opacity-50" : "hover:opacity-80 transition-opacity duration-200 "} 
     ${type === "outline" ? "border-2 border-solid border-black !bg-transparent" : ""} 
     ${type === "text" ? "!bg-transparent" : ""}`;
    return (
        <Comp href={href} disabled={disabled || isLoading} className={newClassName} onClick={onClick} {...rest}>
            {isLoading && (
                <span className="mr-4">
                    <AiOutlineLoading3Quarters className="animate-spin" />
                </span>
            )}
            {leftIcon && <span className="mr-4">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-4">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
