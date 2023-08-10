import { useAppContext } from "@/Context";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import SidebarHeader from "@/components/common/SidebarHeader";
import Sidebar from "@/components/common/Sidebar";
import NavigationTablet from "@/components/common/NavigationTablet"; 

import {
  BigLayout,
  Content,
  MainContent
} from "@/components/layout/MainLayout/mainLayoutStyled";

import { LayoutProps } from "@/model";
import { useEffect, useState } from "react";


const MainLayout = (props: LayoutProps) => {
  const [isTabletLayout, setIsTabletLayout] = useState(false);
  const { isLoading } = useAppContext();
  useEffect(() => {
    const handleResize = () => {
      setIsTabletLayout(window.innerWidth <= 1024);
    } 

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {isLoading && <Loading/> }
      {isTabletLayout ? (
        <div className="w-screen h-screen bg-[#DBDBDB] flex justify-center items-center ">
          <BigLayout>
            <div className="w-full h-full bg-[#DBDBDB] flex justify-between rounded-[10px] relative" >
              <Content className={``}>
                <SidebarHeader active={false} />
                <MainContent>
                  <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px]">
                    <div className="flex justify-center">{props.children}</div>
                  </div>
                </MainContent>
              </Content>
              <NavigationTablet />
            </div>
          </BigLayout>
        </div>
      ) : (
        <div className="w-screen h-screen bg-[#DBDBDB] flex justify-center items-center">
          <BigLayout>
            <div className="w-full h-full bg-[#DBDBDB] flex justify-between  rounded-[10px] ">
              <Sidebar active={false} />
              <Content>
                <Header />
                <MainContent>
                  <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[10px]">
                    <div className="flex justify-center">{props.children}</div>
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
