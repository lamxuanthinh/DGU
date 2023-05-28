import Header from "@/components/layout/Header";
import  Sidebar from "@/components/layout/Sidebar";

import  React, { ReactNode } from 'react';

import { ContentStyle } from '@/components/layout/MainLayout/mainLayoutStyled';
import { LayoutProps } from "@/model";

const MainLayout = (props : LayoutProps) => {
    return (
        <div className="w-[100%] h-[100vh] bg-[#DBDBDB] flex justify-center">
            <div className="w-[1440px] h-[100%] flex flex-nowrap">
                <div className="w-[305px] flex relative">
                    <Sidebar />
                </div>
                <div className="w-[1135px]  flex flex-col relative">
                    <Header />
                    <ContentStyle>
                        <div className="p-[10px] flex justify-center items-center">
                            {props.children}
                        </div>
                    </ContentStyle>
                </div>
            </div>
            
        </div>
    )
}

export default MainLayout;
