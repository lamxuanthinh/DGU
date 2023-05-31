import { MdEditCalendar } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  errorMessage?: string;
  value: any;
  onChange: (value: string) => void;
  name: string;
  classBirthday?: string;
}

export default function DatePicker({
  className,
  errorMessage,
  classBirthday,
  value,
  name,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleDateChange = (value: any) => {
    const formattedValue = moment(value).format("YYYY-MM-DD");
    setInternalValue(formattedValue);
    onChange(formattedValue);
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const renderInput = (props: any) => (
    <div className="flex justify-center items-center">
      <MdEditCalendar className="text-3xl mx-4" onClick={handleIconClick} />
      <input
        {...props}
        ref={inputRef}
        readOnly
        value={
          internalValue
            ? moment(internalValue).format("YYYY-MM-DD")
            : "Enter date of birth"
        }
        className="focus-visible:outline-none py-3 text-[14px] w-full"
      />
      <IoIosArrowDown
        className="text-[27px] mx-4 font-extrabold text-[#38383844]"
        onClick={handleIconClick}
      />
    </div>
  );

  return (
    <div className={className}>
      <div
        className={`${classBirthday} flex justify-center rounded-md items-center bg-white`}
      >
        <Datetime
          className="rounded text-gray focus-visible:outline-none w-full"
          renderInput={renderInput}
          value={internalValue}
          onChange={handleDateChange}
        />
      </div>
      <div className="mt-1 px-5 text-red-600 min-h-[1.5rem] text-sm">
        {errorMessage}
      </div>
    </div>
  );
}
