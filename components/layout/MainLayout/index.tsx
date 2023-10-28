import { useAppContext } from "@/Context";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import SidebarHeader from "@/components/common/SidebarHeader";
import Sidebar from "@/components/common/Sidebar";
import NavigationTablet from "@/components/common/NavigationTablet";
import { LayoutProps } from "@/model";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaGripfire } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { BiLogIn, BiUserCircle, BiVideoPlus } from "react-icons/bi";
import Image from "next/image";

const MainLayout = (props: LayoutProps) => {
    const [isTabletLayout, setIsTabletLayout] = useState(false);
    const { isLoading } = useAppContext();
    const [mounted, setMounted] = useState(false);
    const [followingSelected, setFollowingSelected] = useState<boolean>(false);
    const { session } = useAppContext();

    useEffect(() => {
        const handleResize = () => {
            setIsTabletLayout(window.innerWidth <= 1024);
        };

        setMounted(true);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!mounted) return null;

    return (
        <>
            {isLoading && <Loading />}
            {isTabletLayout ? (
                <div className="w-screen h-[calc(100vh-56px)] bg-[#DBDBDB] dark:bg-[#494949] flex justify-center items-center ">
                    <div className="w-full sm:w-[calc(100%-10px)] h-full sm:h-[calc(100%-10px)] sm:m-[5px] flex justify-center items-center">
                        <div className="w-full h-full bg-white sm:bg-[#DBDBDB] dark:sm:bg-[#494949] flex justify-between rounded-[10px] relative">
                            <div className="absolute w-full h-[1px] bg-black/[0.1] top-[70px]"></div>
                            <div className="w-full flex flex-col relative">
                                <SidebarHeader active={false} />
                                <div className="sm:hidden top-0 left-0 h-[65px] w-full p-2 bg-[#000] flex justify-between items-center">
                                    <div className="mx-3">
                                        <Image
                                            className="ml-[10px] cursor-pointer"
                                            src={require("@/public/Images/logoDark.png")}
                                            width={30}
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="flex gap-5 text-[18px] font-semibold">
                                        <div
                                            className={`${followingSelected == true ? "text-white" : "text-[#7a7a7a]"}`}
                                            onClick={() => {
                                                setFollowingSelected(true);
                                            }}
                                        >
                                            Course
                                        </div>
                                        <div
                                            className={`${followingSelected == true ? "text-[#7a7a7a]" : "text-white"}`}
                                            onClick={() => {
                                                setFollowingSelected(false);
                                            }}
                                        >
                                            For you
                                        </div>
                                    </div>
                                    <div className="rounded-md text-white px-4 py-2 font-semibold">
                                        <FiSearch fontSize={24} />
                                    </div>
                                </div>
                                <div className="h-[calc(100%-70px)] sm:h-[calc(100%-70px)] sm:mt-[5px] rounded-[5px]">
                                    <div className="w-full h-full overflow-y-auto scrollbar-none sm:rounded-[10px]">
                                        <div className="h-full flex justify-center">{props.children}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center sm:hidden text-[25px] py-3 px-6 bg-[#000000] text-white">
                                    <Link href="/">
                                        <AiFillHome />
                                    </Link>
                                    <Link href="/">
                                        <FaGripfire />
                                    </Link>
                                    <div className="flex justify-center items-center">
                                        <BiVideoPlus fontSize={35} className="text-[#7fcffc]" />
                                    </div>
                                    <Link href="/">
                                        <SlSettings />
                                    </Link>
                                    <div className="flex items-center">
                                        {session && session.user.avatar ? (
                                            <BiUserCircle fontSize={30} />
                                        ) : (
                                            <Link href={"/signin"}>
                                                <BiLogIn fontSize={26} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <NavigationTablet />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-screen h-screen bg-[#DBDBDB] dark:bg-black flex justify-center items-center">
                    <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] m-1 flex justify-center items-center">
                        <div className="w-full h-full flex justify-between rounded-[10px]">
                            <Sidebar active={false} />
                            <div className="w-[calc(100%-290px)] lg:w-[calc(100%-245px)] xl:w-[calc(100%-290px)] flex flex-col">
                                <Header />
                                <div className="h-[calc(100%-70px)] mt-[5px] rounded-[5px]">
                                    <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px] bg-white dark:bg-[#2C2C2C]">
                                        <div className="flex justify-center h-full">{props.children}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default MainLayout;
