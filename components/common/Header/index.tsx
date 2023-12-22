import { IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { BiLogIn, BiMessageRounded, BiMoon, BiVideoPlus } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import { dataMenuNav } from "../Menu/constants";

import SearchBar from "../SearchBar";
import { useAppContext } from "@/Context";
import Message from "../Message";
import { dataMessage } from "../Message/constants";
import Notification from "../Notification";
import { dataNotification } from "./constants";

const Header = () => {
    const { session } = useAppContext();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }

        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-between bg-[#fff] dark:bg-[#2C2C2C] rounded-[5px] py-3 px-3 h-[65px]">
            <div className="relative w-[50%] lg:w-[32%] xl:w-[45%] flex flex-nowrap rounded-2xl p-2">
                <SearchBar />
            </div>
            <div className="flex flex-nowrap items-center text-black dark:text-white ">
                <div className="flex items-center ">
                    <div
                        className={`mx-2 p-2 rounded-[50%] bg-[#F6F6F6] dark:bg-[#454545] flex justify-center items-center cursor-pointer ${
                            isAnimating ? "animate-pulseCustom" : ""
                        }`}
                        onClick={toggleTheme}
                    >
                        {theme == "light" ? (
                            <FiSun fontSize={"22px"} className="text-[#000000]" />
                        ) : (
                            <BiMoon fontSize={"22px"} className="text-[#bcbcbc]" />
                        )}
                    </div>
                  
                    <Message dataMessage={dataMessage}>
                        <div className="mx-2 p-2 rounded-[50%] bg-[#F6F6F6] dark:bg-[#454545] flex justify-center items-center cursor-pointer">
                            <BiMessageRounded fontSize={"25px"} />
                        </div>
                    </Message>
                    <Notification dataNotification={dataNotification}>
                        <div className="mx-2 p-2 rounded-[50%] bg-[#F6F6F6] dark:bg-[#454545] flex justify-center items-center cursor-pointer">
                            <IoMdNotificationsOutline fontSize={"25px"} />
                        </div>
                    </Notification>
                </div>
                <div className="w-[182px] h-full flex justify-center items-center">
                    <Link href="/upload" className="cursor-pointer">
                        <div className="py-2 px-4 rounded-[20px] bg-[#F6F6F6] dark:bg-[#454545] flex justify-center">
                            <div className="flex justify-center items-center pr-3">
                                <BiVideoPlus fontSize={"25px"} />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="font-bold">Create Video</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {session && session.user.avatar ? (
                    <Menu menuItems={dataMenuNav}>
                        <div className="flex gap-3 ml-1 cursor-pointer">
                            <Image
                                src={`${session.user.avatar}`}
                                width={40}
                                height={40}
                                className="rounded-full bg-[#727272dd] "
                                alt="logo"
                            />
                        </div>
                    </Menu>
                ) : (
                    <div className="w-[176px] h-full flex justify-center items-center">
                        <Link
                            href={"/signin"}
                            className="bg-[#7FCFFC] rounded-[15px] flex justify-center items-cente py-2 px-4"
                        >
                            <div className="flex justify-center items-center pr-3">
                                <p className="font-bold">Sign in now</p>
                            </div>
                            <div className="flex justify-start items-center">
                                <BiLogIn fontSize={"25px"} />
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
