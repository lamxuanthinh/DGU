import { IGenderOption, IOptionDropdown } from "@/model";
import { useEffect, useRef, useState } from "react";
interface IDropdownProps {
    classOptions?: string;
    className?: string;
    classDropdown?: string;
    menuItems: Array<IOptionDropdown>;
    children: string | React.ReactNode;
    setItemSelected: (item: IGenderOption) => void;
}

export default function Dropdown({
    menuItems,
    children,
    classOptions,
    className,
    classDropdown,
    setItemSelected,
}: IDropdownProps) {
    const [isDropdown, setIsDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    const handleItemSelected = (item: any) => {
        setItemSelected(item);
        setIsDropdown(false);
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <div
                className={`select-none hover:cursor-pointer bg-white dark:bg-[#1a1a1a] flex justify-between items-center px-[20px] sm:mr-0 h-[48px] rounded-xl text-[14px] border-[#52525233] dark:border-[#fff] border-2 ${classDropdown}`}
                onClick={handleDropdown}
            >
                {children}
            </div>
            {isDropdown && (
                <ul
                    className={`bg-white dark:bg-[#2C2C2C] flex flex-col gap-2 absolute top-[55px] left-0 w-full  shadow-menu z-50 rounded-[10px] py-[10px] px-[20px] max-h-[60vh] overflow-y-scroll no-scrollbar  ${classOptions}`}
                >
                    {menuItems?.map((item: IOptionDropdown, index: number) => {
                        return (
                            <li
                                key={index}
                                className="hover:cursor-pointer"
                                onClick={() => {
                                    handleItemSelected(item);
                                }}
                            >
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
