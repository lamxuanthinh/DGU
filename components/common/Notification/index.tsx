import { useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineSetting } from "react-icons/ai";
import { INotificationItems } from "@/model/notification";

interface INotificationProps {
    className?: string;
    children: string | React.ReactNode;
    dataNotification: Array<INotificationItems>;
}

export default function Notification({ dataNotification, className, children }: INotificationProps) {
    const [isNotification, setIsNotification] = useState<boolean>(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    const handleToggleNotification = () => {
        setIsNotification(!isNotification);
    };

    const truncateString = (str: any, num: any) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + "...";
    };

    return (
        <div className="relative" ref={notificationRef}>
            <div className="select-none" onClick={handleToggleNotification}>
                {children}
            </div>
            {isNotification && (
                <ul
                    className={`bg-white dark:bg-[#2C2C2C] absolute top-[55px] right-0 w-[330px] lg:w-[500px] z-50 rounded-[10px] py-3 px-4 shadow-menu dark:shadow-darkMenu overflow-y-scroll no-scrollbar  ${className}`}
                >
                    <div className="flex justify-between pb-4">
                        <div className="lg:text-[18px] font-bold text-[#868585]">Notification</div>
                        <div className="flex justify-center items-center gap-5 hover:cursor-pointer">
                            <AiOutlineSetting fontSize={20} className="text-[#868585]" />
                        </div>
                    </div>
                    <div className="pb-2">
                        {dataNotification.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex justify-between items-center rounded-md hover:bg-[#f2f2f2] dark:hover:bg-[#454545] hover:cursor-pointer px-2 py-1 transition duration-400"
                                >
                                    <div className="flex justify-start items-center w-full">
                                        <div className="py-2 pr-4 rounded-2xl">
                                            <Image
                                                src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
                                                className="w-9 h-9"
                                                alt=""
                                            />
                                        </div>
                                        <div className="font-semibold w-[80%]">
                                            <div>
                                                {item.name}
                                                {item.type == 1 && (
                                                    <span className="text-[16px] font-normal text-[#868585]">
                                                        {` commented on your post : `}
                                                        <span className="font-semibold text-black dark:text-white">{`"${truncateString(
                                                            item.lastMessageLine,
                                                            40,
                                                        )}"`}</span>
                                                    </span>
                                                )}
                                                {item.type == 2 && (
                                                    <span className="font-normal text-[#868585]"> followed you.</span>
                                                )}
                                                {item.type == 3 && (
                                                    <span className="font-normal text-[#868585]">
                                                        {" "}
                                                        hearted your post.
                                                    </span>
                                                )}
                                                {item.type == 4 && (
                                                    <span className="text-[16px] font-normal text-[#868585]">
                                                        {` registered for your course : `}
                                                        <span className="font-semibold text-black dark:text-white">{`"${truncateString(
                                                            item.lastMessageLine,
                                                            40,
                                                        )}"`}</span>
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[#868585] text-[15px]">{item.time}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                    <hr className="border-t-2 pb-2 dark:border-[#4c4c4c]" />
                    <div className="text-[#868585] font-semibold text-center text-sm hover:cursor-pointer hover:underline">
                        See all in notifications
                    </div>
                </ul>
            )}
        </div>
    );
}
