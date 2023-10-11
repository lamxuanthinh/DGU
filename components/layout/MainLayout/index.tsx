import { useAppContext } from "@/Context";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import SidebarHeader from "@/components/common/SidebarHeader";
import Sidebar from "@/components/common/Sidebar";
import NavigationTablet from "@/components/common/NavigationTablet";
import { LayoutProps } from "@/model";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MainLayout = (props: LayoutProps) => {
    const [isTabletLayout, setIsTabletLayout] = useState(false);
    const { isLoading } = useAppContext();
    const [mounted, setMounted] = useState(false);

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
                <div className="w-screen h-screen bg-[#DBDBDB] flex justify-center items-center ">
                    <div className="w-full sm:w-[calc(100%-10px)] h-full sm:h-[calc(100%-10px)] sm:m-[5px] flex justify-center items-center">
                        <div className="w-full h-full bg-white sm:bg-[#DBDBDB] flex justify-between rounded-[10px] relative">
                            <div className="absolute w-full h-[1px] bg-black/[0.1] top-[70px]"></div>
                            <div className="w-full flex flex-col relative">
                                <SidebarHeader active={false} />
                                <div className="h-full sm:h-[calc(100%-70px)] sm:mt-[5px] rounded-[5px]">
                                    <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px]">
                                        <div className="h-full flex justify-center">{props.children}</div>
                                    </div>
                                </div>
                                <div className="fixed sm:hidden top-0 left-0 w-full p-2 bg-[#9999996f] flex justify-between items-center">
                                    <div className="mx-3">
                                        <Link
                                            href="/"
                                            className="w-full h-full rounded-l-[5px] flex items-center justify-center cursor-pointer "
                                        >
                                            <Image
                                                className="w-[30px]"
                                                width={60}
                                                src={require("@/public/Images/logoDark.png")}
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-[#ff4545] rounded-md text-white px-4 py-2 font-semibold">
                                        Open app...
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
                            <div className="w-[calc(100%-290px)] flex flex-col">
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
