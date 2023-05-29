import { MdEditCalendar } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  errorMessage?: string;
  value: any;
  onChange: (value: string) => void;
  name: string;
}

export default function DatePicker({
  className,
  errorMessage,
  value,
  name,
  onChange,
}: Props) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleDateChange = (value: any) => {
    const formattedValue = moment(value).format("YYYY-MM-DD");
    setInternalValue(formattedValue);
    onChange(formattedValue);
  };

  return (
    <div className={className}>
      <div className="flex justify-center rounded-xl items-center bg-white">
        <MdEditCalendar className="text-2xl mx-4" />
        <Datetime
          className="rounded text-gray focus-visible:outline-none"
          inputProps={{
            readOnly: true,
            value: internalValue
              ? moment(internalValue).format("YYYY-MM-DD")
              : "",
            className: "focus-visible:outline-none py-3 text-[14px]",
          }}
          onChange={handleDateChange}
        />
        <IoMdArrowDropdown className="text-2xl mx-4" />
      </div>
      <div className="mt-1 px-5 text-red-600 min-h-[1.5rem] text-sm">
        {errorMessage}
      </div>
    </div>
  );
}
