import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { FaTransgender } from "react-icons/fa";
import Select from "react-select";

interface IDropdownProps {
    valueSelected: any;
    setValueSelected: React.Dispatch<React.SetStateAction<string>>;
    Icon: IconType;
    options: {
        value: string;
        label: string;
    }[];
}

export default function Dropdown({ valueSelected, setValueSelected, Icon, options }: IDropdownProps) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const handleValue = (value: any) => {
        setValueSelected(value.value);
    };

    return (
        <Select
            styles={{
                container: (base) => ({
                    ...base,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                }),
                control: (base) => ({
                    ...base,
                    border: 0,
                    boxShadow: "none",
                    cursor: "pointer",
                    width: "100%",
                }),
                option: (base) => ({
                    ...base,
                    paddingLeft: "40px",
                    backgroundColor: "white",
                    color: "black",
                }),
                input: (base, { selectProps }) => ({
                    ...base,
                    display: "none", // Ẩn thẻ input gây ra sự cố
                    opacity: selectProps.menuIsOpen ? 0 : 1,
                    pointerEvents: selectProps.menuIsOpen ? "none" : "auto",
                }),
            }}
            className=""
            defaultValue={{ value: options[0].value, label: options[0].label }}
            onChange={(value) => handleValue(value)}
            options={options}
            menuIsOpen={menuIsOpen}
            onMenuOpen={handleMenu}
            onMenuClose={handleMenu}
            components={{
                IndicatorSeparator: null,

                SingleValue: ({ data }) => (
                    <div className="flex items-center justify-evenly" onClick={handleMenu}>
                        <Icon className="text-xl mx-2" />
                        <span className="">{data.label}</span>
                    </div>
                ),
            }}
        />
    );
}
