import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { MdEditCalendar } from "react-icons/md";

interface Props {
  className?: string;
}

export default function DatePicker({ className }: Props) {
  return (
    <div className={className}>
      <MdEditCalendar className="mx-4" />
      <Datetime
        value="Select birthday"
        className="w-50 rounded py-3 px-2 text-gray"
      />
    </div>
  );
}
