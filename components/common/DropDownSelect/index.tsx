import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IDropDownProps {
    options: any;
    onSelectOption: (option: string) => void;
    className?: string;
}

const DropDownSelect = ({ className, options, onSelectOption }: IDropDownProps) => {
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0].name);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsActiveMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        onSelectOption(option);
        setIsActiveMenu(false);
    };

    const handleToggleMenu = () => {
        setIsActiveMenu((pre) => !pre);
    };

    return (
        <div className="relative select-none" ref={dropdownRef}>
            <div className={`flex items-center cursor-pointer justify-between ${className}`} onClick={handleToggleMenu}>
                <div className="mr-[10px] text-sm text-[#888888] dark:text-white">{selectedOption}</div>
                <MdKeyboardArrowDown className="font-bold text-[22px]" />
            </div>
            {isActiveMenu && (
                <ul className="absolute bg-white shadow-button px-[14px] py-2 text-slateGray text-sm animate-fadeInTop w-full shadow-md z-[10] dark:bg-[#636363] rounded-b">
                    {options.map((option: any) => (
                        <li
                            onClick={() => handleSelectOption(option.name)}
                            key={option.id}
                            className="py-3 hover:text-black cursor-pointer text-[#888888] dark:text-white hover:opacity-70"
                        >
                            <span className="text-start">{option.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDownSelect;
