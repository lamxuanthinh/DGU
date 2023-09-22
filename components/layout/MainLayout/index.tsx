import { useAppContext } from "@/Context";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import SidebarHeader from "@/components/common/SidebarHeader";
import Sidebar from "@/components/common/Sidebar";
import NavigationTablet from "@/components/common/NavigationTablet";
import { LayoutProps } from "@/model";
import { useEffect, useState } from "react";

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
                    <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] m-[5px] flex justify-center items-center">
                        <div className="w-full h-full bg-white sm:bg-[#DBDBDB] flex justify-between rounded-[10px] relative">
                            <div className="absolute w-full h-[1px] bg-black/[0.1] top-[70px]"></div>
                            <div className="w-[calc(100%-290px)] flex flex-col lg:w-full lg:active:w-[calc(100%-295px)]">
                                <SidebarHeader active={false} />
                                <div className="h-[calc(100%-70px)] mt-[5px] rounded-[5px]">
                                    <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px]">
                                        <div className="h-full flex justify-center">{props.children}</div>
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
                                        <div className="h-full flex justify-center">{props.children}</div>
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
