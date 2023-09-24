import { useAppContext } from "@/Context";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import SidebarHeader from "@/components/common/SidebarHeader";
import Sidebar from "@/components/common/Sidebar";
import NavigationTablet from "@/components/common/NavigationTablet";
import { BigLayout, Content, MainContent } from "@/components/layout/MainLayout/mainLayoutStyled";
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
                    <BigLayout>
                        <div className="w-full h-full bg-white sm:bg-[#DBDBDB] flex justify-between rounded-[10px] relative">
                            <div className="absolute w-full h-[1px] bg-black/[0.1] top-[70px]"></div>
                            <Content>
                                <SidebarHeader active={false} />
                                <MainContent>
                                    <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px]">
                                        <div className="h-full flex justify-center">{props.children}</div>
                                    </div>
                                </MainContent>
                            </Content>
                            <NavigationTablet />
                        </div>
                    </BigLayout>
                </div>
            ) : (
                <div className="w-screen h-screen bg-[#DBDBDB] dark:bg-black flex justify-center items-center">
                    <BigLayout>
                        <div className="w-full h-full flex justify-between rounded-[10px]">
                            <Sidebar active={false} />
                            <Content>
                                <Header />
                                <MainContent>
                                    <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px] bg-white dark:bg-[#2C2C2C]">
                                        <div className="flex h-full justify-center">{props.children}</div>
                                    </div>
                                </MainContent>
                            </Content>
                        </div>
                    </BigLayout>
                </div>
            )}
        </>
    );
};
export default MainLayout;
