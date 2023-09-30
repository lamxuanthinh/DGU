import { useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import Image from "next/image";
import { IMessageItems } from "@/model/messageItems";

interface IMessageProps {
    className?: string;
    children: string | React.ReactNode;
    dataMessage: any;
}

export default function Message({ dataMessage, className, children }: IMessageProps) {
    const [isMessage, setIsMessage] = useState<boolean>(false);
    const messageRef = useRef<HTMLDivElement>(null);

    const handleToggleMessage = () => {
        setIsMessage(!isMessage);
    };

    const truncateString = (str: any, num: any) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + "..."; // Thêm '...' vào cuối nếu chuỗi bị cắt
    };

    return (
        <div className="relative" ref={messageRef}>
            <div className="select-none" onClick={handleToggleMessage}>
                {children}
            </div>
            {isMessage && (
                <ul
                    className={`bg-white dark:bg-[#2C2C2C] absolute top-[60px] left-2 w-[330px] z-50 rounded-[10px] p-[10px] max-h-[60vh] shadow-menu overflow-y-scroll no-scrollbar  ${className}`}
                >
                    <div className="flex justify-between pb-4">
                        <div>Chat</div>
                        <div className="flex justify-center items-center gap-3">
                            <SlOptions fontSize={16} />
                            <MdZoomOutMap fontSize={16} />
                            <BiEdit fontSize={20} />
                        </div>
                    </div>
                    {dataMessage.map((item: IMessageItems, index: any) => {
                        return (
                            <li key={index} className="flex justify-between items-center">
                                <div className="flex justify-start max-w-[90%]">
                                    <div className="p-2 rounded-2xl">
                                        <Image
                                            src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
                                            className="w-8 h-8"
                                            alt=""
                                        />
                                    </div>
                                    <div className="">
                                        <h2>{item.name}</h2>
                                        <p>{truncateString(item.lastMessageLine, 17)}</p>
                                    </div>
                                </div>
                                <div>{item.time}</div>
                            </li>
                        );
                    })}

                    <div></div>
                </ul>
            )}
        </div>
    );
}
