import { useState } from "react";
import { IconType } from "react-icons";
import Select from "react-select";

interface IDropdownProps {
    valueSelected: any;
    setValueSelected: React.Dispatch<React.SetStateAction<string>>;
    Icon?: IconType;
    options: {
        value: string;
        label: string;
    }[];
    classNameLabel?: string;
    setValue?: any;
}

export default function Dropdown({ setValueSelected, Icon, options, classNameLabel = "", setValue }: IDropdownProps) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const handleValue = (value: any) => {
        setValueSelected(value.value);
        setValue && setValue("classify", value.value);
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
                    display: "none",
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
                    <div className="flex items-center justify-start" onClick={handleMenu}>
                        {Icon && <Icon className="text-xl mx-2" />}
                        <span className={classNameLabel}>{data.label}</span>
                    </div>
                ),
            }}
        />
    );
}
