import { useEffect, useRef, useState } from "react";
import Button from "../Button";
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
                <div className="mr-[10px] text-sm">{selectedOption}</div>
                <MdKeyboardArrowDown className="font-bold text-[22px]" />
            </div>
            {isActiveMenu && (
                <ul className="absolute bg-white shadow-button px-[14px] py-2 text-slateGray text-sm animate-fadeInTop w-full shadow-md z-[10]">
                    {options.map((option: any) => (
                        <li key={option.id} className="py-2 hover:text-black cursor-pointer">
                            <Button onClick={() => handleSelectOption(option.name)} className="text-start">
                                {option.name}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDownSelect;
