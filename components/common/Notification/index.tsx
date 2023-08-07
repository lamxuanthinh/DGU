import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FcSettings } from "react-icons/fc";
import { BsChatHeartFill, BsChatLeftDots } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdCheckmark, IoMdShareAlt } from "react-icons/io";

import { notification } from "@/model/notification";
import { notificationData } from "@/components/common/Notification/constants";

import { NotificationContentStyled } from "@/components/common/Notification/notificationStyled"; 

interface INotificationProps {
    className?: string;
    notificationItems: Array<notification>;
    children: string | React.ReactNode;
    theme?: "black";
}

export function NotificationPopup({ notificationItems, children, theme, className }: INotificationProps) {
    const [isNotification, setIsNotification] = useState<boolean>(false);

    return (
        <>
            <div className={`relative ${className}  ${isNotification == true ? `bg-[#D5D5D5]` : ``} `}>
                <div className="select-none" onClick={() => setIsNotification(true)}>
                    {children}
                </div>
                {isNotification &&
                    <div
                        className="fixed inset-0 bg-transparent z-40"
                        onClick={() => setIsNotification(false)}
                    ></div>
                }
                {isNotification && (
                    <div className={`absolute top-[60px] right-[-300px] w-[460px] h-[530px] shadow-menu z-50 rounded-[5px]    ${theme === "black" ? "bg-[#1F1F1F] text-white" : "bg-white text-black"}  `}>
                        <div className="w-full h-[50px] flex flex-row justify-between items-center text-[#757474] border-[#1618232f] border-b-[1px] ">
                            <p className="ml-[20px] text-[18px] font-semibold ">Notification</p>
                            <FcSettings fontSize={`20px`} className={`mr-[20px]`} />
                        </div>
                        <ul className={`h-[440px] overflow-y-scroll no-scrollbar`} >
                            { notificationItems.map((data: notification) => {
                                
                                switch(data.type)
                                {
                                    case "new-follow":
                                        return (
                                            <li
                                                key={``}
                                                className={`cursor-pointer h-[75px]  rounded-[5px] mx-[8px] my-[2px] hover:bg-[#F9F9F9]`}
                                            >
                                                <Link
                                                    className="flex justify-start items-center px-[14px] py-[10px]"
                                                    href={data.link}
                                                >
                                                    <div className="w-[50px] h-[40px] flex justify-start items-center relative">
                                                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                            <Image
                                                                src={require("@/public/Images/Notifications/boy1.jpg")}
                                                                style={{ 
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                }}
                                                                alt="logo"
                                                            />
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#27C9DF] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                            <RiUserFollowLine fontSize={`10px`} />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-center items-start flex-col">

                                                        <span className="ml-4  text-base font-medium text-[#818181]" ><b className="text-[#000000]">{data.user.name}</b> đã follow bạn</span>

                                                        <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time} </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        );    

                                    case "love-video":
                                        return (
                                            <li
                                                key={``}
                                                className={`cursor-pointer h-[75px]  rounded-[5px] mx-[8px] my-[2px] hover:bg-[#F9F9F9]`}
                                            >
                                                <Link
                                                    className="flex justify-start items-center px-[14px] py-[10px]"
                                                    href={data.link}
                                                >
                                                    <div className="w-[50px] h-[40px] flex justify-start items-center relative">
                                                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                            <Image
                                                                src={require("@/public/Images/Notifications/boy2.jpg")}
                                                                style={{ 
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                }}
                                                                alt="logo"
                                                            />
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#DB0000] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                            <BsChatHeartFill fontSize={`10px`} />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-center items-start flex-col">

                                                        <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã thả tim bài viết của bạn</span>

                                                        <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        );

                                    case "comment-video":
                                        return (
                                            <li
                                                key={``}
                                                className={`cursor-pointer h-[75px]  rounded-[5px] mx-[8px] my-[2px] hover:bg-[#F9F9F9]`}
                                            >
                                                <Link
                                                    className="flex justify-start items-center px-[14px] py-[10px]  h-full"
                                                    href={data.link}
                                                >
                                                    <div className="w-[50px] h-full flex justify-start items-start relative">
                                                        <div className="w-[40px] h-[40px] mr-[10px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                            <Image
                                                                src={require("@/public/Images/Notifications/boy3.jpg")}
                                                                style={{ 
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                }}
                                                                alt="logo"
                                                            />
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#3B91F7] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                            <BsChatLeftDots fontSize={`10px`} />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-center items-start flex-col">

                                                        <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã bình luận bài viết của bạn: &quot;<b className="text-[#000000]">{data.comment != null ? data.comment.content_comment : "" }</b> &quot;</span>

                                                        <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        );

                                    case "register-course":
                                        return (
                                            <li
                                                key={``}
                                                className={`cursor-pointer h-[75px]  rounded-[5px] mx-[8px] my-[2px] hover:bg-[#F9F9F9]`}
                                            >
                                                <Link
                                                    className="flex justify-start items-center px-[14px] py-[10px]  h-full"
                                                    href={data.link}
                                                >
                                                    <div className="w-[50px] h-full flex justify-start items-start relative">
                                                        <div className="w-[40px] h-[40px] mr-[10px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                            <Image
                                                                src={require("@/public/Images/Notifications/boy1.jpg")}
                                                                style={{ 
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                }}
                                                                alt="logo"
                                                            />
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#05AC1F] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                            <span className="text-[10px]">$</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-center items-start flex-col">

                                                        <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã đăng ký khóa học: &quot;<b className="text-[#000000]">{data.comment != null ? data.comment.content_comment : "" }</b>&quot;  của bạn với giá <b className="text-[#00B01C]">${data.course != null ? data.course.fee : "" }</b> </span>

                                                        <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        );

                                    case "receive-money":
                                        return (
                                            <li
                                                key={``}
                                                className={`cursor-pointer h-[75px]  rounded-[5px] mx-[8px] my-[2px] hover:bg-[#F9F9F9]`}
                                            >
                                                <Link
                                                    className="flex justify-start items-center px-[14px] py-[10px]  h-full"
                                                    href={data.link}
                                                >
                                                    <div className="w-[50px] h-full flex justify-start items-start relative">
                                                        <div className="w-[40px] h-[40px] mr-[10px] bg-[#9BF1A9] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                            <IoMdCheckmark fontSize={`20px`} className={`text-[#02A11B] font-extrabold`}  />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-center items-start flex-col">

                                                        <span className="ml-4  text-base font-medium text-[#818181]">Bạn đã nhận được <b className="text-[#00B01C]">${data.course != null ? data.course.fee : "" }</b> từ <b className="text-[#000000]">{data.user.name}</b> phí đăng kí khóa học &quot;<b className="text-[#000000]">{data.course != null ? data.course.course_name : "" }</b>&quot;</span>

                                                        <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        );

                                    default:
                                    //
                                    break;
                                }
                                
                            }) }
                        </ul>
                        <div className="w-full h-[40px] flex flex-row justify-start items-center text-[#010101] border-[#1618232f] border-t-[1px] ">
                            <Link href={'/notification'} className="ml-[20px] text-[15px] font-semibold ">See all notifications</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export function NotificationContent() {
    
    return (
        <>
            <NotificationContentStyled >
                <ul className={`w-full h-full overflow-y-scroll no-scrollbar`} >
                    {notificationData.map((data) => {
                        
                        switch(data.type)
                        {
                            case "new-follow":
                                return (
                                    <li
                                        key={``}
                                        className={`cursor-pointer w-full h-[130px] rounded-[5px]  hover:bg-[#F9F9F9]`}
                                    >
                                        <Link
                                            className="flex justify-start items-start px-[14px] py-[10px]"
                                            href={data.link}
                                        >
                                            <div className="w-[50px] h-[40px] mt-[10px] flex justify-start items-center relative">
                                                <div className="w-[40px] h-[40px] mr-[10px]  flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                    <Image
                                                        src={require("@/public/Images/Notifications/boy1.jpg")}
                                                        style={{ 
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#27C9DF] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                    <RiUserFollowLine fontSize={`10px`} />
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start flex-col">
                                                <span className="ml-4  text-base font-medium text-[#818181]" ><b className="text-[#000000]">{data.user.name}</b> đã follow bạn</span>

                                                <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time} </span>
                                            
                                                <div className="ml-4  mt-2 flex justify-center items-start flex-nowrap">
                                                    <button className="w-[120px] h-[35px] flex justify-center items-center bg-[#7fcefc3f] rounded-[5px] text-[12px] text-[#3983AC] font-bold">
                                                        FOLLOW BACK
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                );    

                            case "love-video":
                                return (
                                    <li
                                        key={``}
                                        className={`cursor-pointerw-full h-[75px] rounded-[5px] hover:bg-[#F9F9F9]`}
                                    >
                                        <Link
                                            className="flex justify-start items-center px-[14px] py-[10px]"
                                            href={data.link}
                                        >
                                            <div className="w-[50px] h-[40px] flex justify-start items-center relative">
                                                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                    <Image
                                                        src={require("@/public/Images/Notifications/boy2.jpg")}
                                                        style={{ 
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#DB0000] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                    <BsChatHeartFill fontSize={`10px`} />
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start flex-col">

                                                <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã thả tim bài viết của bạn</span>

                                                <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                            </div>
                                        </Link>
                                    </li>
                                );

                            case "comment-video":
                                return (
                                    <li
                                        key={``}
                                        className={`cursor-pointer w-full h-[130px] rounded-[5px] hover:bg-[#F9F9F9]`}
                                    >
                                        <Link
                                            className="flex justify-start items-center px-[14px] py-[10px]  h-full"
                                            href={data.link}
                                        >
                                            <div className="w-[50px] mt-[10px] h-full flex justify-start items-start relative">
                                                <div className="w-[40px] h-[40px] mr-[10px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                    <Image
                                                        src={require("@/public/Images/Notifications/boy3.jpg")}
                                                        style={{ 
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#3B91F7] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                    <BsChatLeftDots fontSize={`10px`} />
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start flex-col">
                                                <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã bình luận bài viết của bạn: &quot;<b className="text-[#000000]">{data.comment != null ? data.comment.content_comment : "" }</b> &quot;</span>

                                                <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                            
                                                <div className="ml-4  mt-2   flex justify-center items-start flex-nowrap">
                                                    <button className="w-[100px] h-[35px] flex justify-center items-center border-[#949494] border-[2px] rounded-[5px] text-[12px] text-[#818181] font-bold">
                                                        SKIP
                                                    </button>

                                                    <button className="w-[100px] h-[35px] ml-[0.5rem] flex justify-center items-center bg-[#7fcefc3f] rounded-[5px] text-[12px] text-[#3983AC] font-bold">
                                                        VIEW
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                );

                            case "share-video":
                                return (
                                    <li
                                        key={``}
                                        className={`cursor-pointerw-full h-[75px] rounded-[5px] hover:bg-[#F9F9F9]`}
                                    >
                                        <Link
                                            className="flex justify-start items-center px-[14px] py-[10px]"
                                            href={data.link}
                                        >
                                            <div className="w-[50px] h-[40px] flex justify-start items-center relative">
                                                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                    <Image
                                                        src={require("@/public/Images/Notifications/boy2.jpg")}
                                                        style={{ 
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#3B91F7] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                    <IoMdShareAlt fontSize={`10px`} />
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start flex-col">

                                                <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã share video short &quot;<b className="text-[#000000]">{data.course ? data.course.course_name : ""}</b>&quot; của bạn.</span>

                                                <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                            </div>
                                        </Link>
                                    </li>
                                );

                            case "register-course":
                                return (
                                    <li
                                        key={``}
                                        className={`cursor-pointer w-full h-[75px] rounded-[5px] hover:bg-[#F9F9F9]`}
                                    >
                                        <Link
                                            className="flex justify-start items-center px-[14px] py-[10px]  h-full"
                                            href={data.link}
                                        >
                                            <div className="w-[50px] mt-[10px] h-full flex justify-start items-start relative">
                                                <div className="w-[40px] h-[40px] mr-[10px] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                    <Image
                                                        src={require("@/public/Images/Notifications/boy1.jpg")}
                                                        style={{ 
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#05AC1F] text-[#ffffff] border-[#ffffff] border-[1px]  rounded-[50%]  flex justify-center items-center">
                                                    <span className="text-[10px]">$</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start flex-col">

                                                <span className="ml-4  text-base font-medium text-[#818181]"><b className="text-[#000000]">{data.user.name}</b> đã đăng ký khóa học: &quot;<b className="text-[#000000]">{data.course ? data.course.course_name : ""}</b>&quot;  của bạn với giá <b className="text-[#00B01C]">${data.course ? data.course.fee : ""}</b> </span>

                                                <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                            </div>
                                        </Link>
                                    </li>
                                );

                            case "receive-money":
                                return (
                                    <li
                                        key={``}
                                        className={`cursor-pointer w-full h-[130px] rounded-[5px] hover:bg-[#F9F9F9]`}
                                    >
                                        <Link
                                            className="flex justify-start items-center px-[14px] py-[10px]  h-full"
                                            href={data.link}
                                        >
                                            <div className="w-[50px] mt-[10px] h-full flex justify-start items-start relative">
                                                <div className="w-[40px] h-[40px] mr-[10px] bg-[#9BF1A9] flex justify-center items-center rounded-[50%] overflow-hidden ">
                                                    <IoMdCheckmark fontSize={`20px`} className={`text-[#02A11B] font-extrabold`}  />
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start flex-col">
                                                <span className="ml-4  text-base font-medium text-[#818181]">Bạn đã nhận được <b className="text-[#00B01C]">${data.course ? data.course.fee : ""}</b> từ <b className="text-[#000000]">{data.user.name}</b> phí đăng kí khóa học &quot;<b className="text-[#000000]">{data.course ? data.course.course_name : ""}</b>&quot;</span>

                                                <span className="ml-4 mt-2  font-medium text-[12px] text-[#818181]"> {data.time}</span>
                                            
                                                <div className="ml-4 mt-2 flex justify-center items-start flex-nowrap">
                                                    <button className="w-[120px] h-[35px] flex justify-center items-center bg-[#7ffc903f] rounded-[5px] text-[12px] text-[#39ac48] font-bold">
                                                        CHECK WALLET
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                );

                            default:
                            //
                            break;
                        }
                        
                    }) }
                </ul>
            </NotificationContentStyled>
        </>
    );
}















