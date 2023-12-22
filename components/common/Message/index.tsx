import { useEffect, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import Image from "next/image";
import { IMessageItems } from "@/model/message";
import TextEllipsis from "../TextEllipsis";

interface IMessageProps {
    className?: string;
    children: string | React.ReactNode;
    dataMessage: Array<IMessageItems>;
}

export default function Message({ dataMessage, className, children }: IMessageProps) {
    const [isMessage, setIsMessage] = useState<boolean>(false);
    const messageRef = useRef<HTMLDivElement>(null);

    const handleToggleMessage = () => {
        setIsMessage(!isMessage);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const targetElement = event.target as HTMLElement;

            if (messageRef.current && !messageRef.current.contains(targetElement)) {
                setIsMessage(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={messageRef}>
            <div className="select-none" onClick={handleToggleMessage}>
                {children}
            </div>
            {isMessage && (
                <ul
                    className={`bg-white dark:bg-[#2C2C2C] absolute top-[55px] right-0 w-[330px] lg:w-[500px] z-50 rounded-[10px] py-3 px-4 shadow-menu dark:shadow-darkMenu overflow-y-scroll no-scrollbar  ${className}`}
                >
                    <div className="flex justify-between pb-4">
                        <div className="lg:text-[18px] font-bold text-[#868585]">Chat</div>
                        <div className="flex justify-center items-center gap-5">
                            <SlOptions fontSize={16} className="hover:cursor-pointer" />
                            <MdZoomOutMap fontSize={16} className="hover:cursor-pointer" />
                            <BiEdit fontSize={20} className="hover:cursor-pointer" />
                        </div>
                    </div>
                    <div className="pb-2">
                        {dataMessage.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex justify-between items-center rounded-md hover:bg-[#f2f2f2] dark:hover:bg-[#454545] hover:cursor-pointer px-2 py-1 transition duration-400"
                                >
                                    <div className="flex justify-start max-w-[90%]">
                                        <div className="py-2 pr-4 rounded-2xl">
                                            <Image
                                                src={require(`@/public/Images/Profile/Mycourse/${item.avatar}`)}
                                                className="w-9 h-9"
                                                alt=""
                                            />
                                        </div>
                                        <div className="font-semibold">
                                            <h2>{item.name}</h2>
                                            <TextEllipsis
                                                content={item.lastMessageLine}
                                                className="text-[#868585] text-[15px]"
                                                isThreeDots
                                                characterLength={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-[#868585] text-[13px]">{item.time}</div>
                                </li>
                            );
                        })}
                    </div>
                    <hr className="border-t-2 pb-2 dark:border-[#4c4c4c]" />
                    <div className="text-[#868585] font-semibold text-center text-sm hover:cursor-pointer hover:underline">
                        See all in messages
                    </div>
                </ul>
            )}
        </div>
    );
}
