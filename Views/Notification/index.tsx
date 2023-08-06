import { NotificationContent as Content } from "@/components/common/Notification";
import { FilterSection, ActionFilterSection } from "@/components/common/Notification/notificationStyled"; 

import { useRef } from "react";

export default function NotificationContent () {

    const filterSectionRef = useRef<HTMLDivElement | null>(null);
    const actionFilterSectionRef = useRef<HTMLDivElement | null>(null);

    const HandleClickFilter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (actionFilterSectionRef.current) {
            actionFilterSectionRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
        }
    }



    return (
        <>
            <div className="w-[100%] h-[100%] flex flex-col justify-center items-center overflow-hidden p-[10px] ">
                <div className=" w-[100%] h-[100%] flex justify-center items-center">
                    <div className=" w-[80%] h-[100%] flex flex-col justify-start items-center">
                        <div className="w-[100%] h-[50px] flex flex-nowrap justify-between items-center">
                            <p className="text-[24px] font-bold ">Notifications</p>
                            <p className="text-[15px] text-[#3983AC] font-bold ">Mark all as read</p>
                        </div>
                        <div className="w-[100%] h-[40px] flex flex-nowrap justify-start items-center">
                            <div className="w-auto h-[40px] flex flex-nowrap justify-start items-center relative">
                                <FilterSection ref={filterSectionRef} onClick={HandleClickFilter} className="filter-section w-[120px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                                    <p className="text-[15px] font-bold active">All</p>
                                </FilterSection>
                                <FilterSection ref={filterSectionRef} onClick={HandleClickFilter} className="filter-section w-[120px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                                    <p className="text-[15px] font-bold ">Following</p>
                                </FilterSection>
                                <FilterSection ref={filterSectionRef} onClick={HandleClickFilter} className="filter-section w-[120px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                                    <p className="text-[15px] font-bold ">Archive</p>
                                </FilterSection>
                                <ActionFilterSection ref={actionFilterSectionRef} className="action-filter-section w-[120px] h-[40px] flex justify-center items-center border-[#3983AC] border-b-[3px] absolute top-0 left-0"></ActionFilterSection>
                            </div>
                        </div>
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
} 