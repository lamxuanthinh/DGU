import {
    SectionCreateVideo,
    HeaderTablet,
    MenuButton
} from "@/components/common/Header/headerStyled";
import { dataMenuNav } from "@/public/data/menuNavigation";
import Menu from "../Menu";

import Image from "next/image";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRounded, BiVideoPlus } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

interface SidebarHeaderProps {
    active: boolean
}


const SidebarHeader: React.FC<{active: boolean}> = ({ active }) => {

    return (
        <>
            <div className="w-full h-[65px] flex flex-wrap items-center justify-between  " >
                <MenuButton className={` ${active ? 'active' : ''} w-[115px] h-full flex items-center justify-center `}>
                    <div className="w-[115px] h-full bg-[#fff] flex items-center justify-center cursor-pointer " > 
                        <Image
                            width={60}
                            src={require("@/public/Images/logo.png")}
                            alt="logo"
                        />
                    </div>
                </MenuButton>
            
                <HeaderTablet className={`${active ? 'active' : ''} flex items-center justify-end bg-[#fff] rounded-[5px] py-3 px-3 h-[65px]`}>
            
                    <div className="flex flex-nowrap items-center">
                        <div className="flex items-center">
                            <div className="mx-2 p-3 rounded-[50%] bg-[#F6F6F6] flex justify-center items-center cursor-pointer">
                                <BsSearch color="#000000" fontSize={"18px"} />
                            </div>
                        </div>
            
                        <SectionCreateVideo>
                            <Link
                                href="/upload"
                                className="cursor-pointer"
                            >
                            <div className="py-2 px-4 rounded-[20px] bg-[#F6F6F6] flex justify-center">
                                <div className="flex justify-center items-center pr-3">
                                <BiVideoPlus color="#000000" fontSize={"25px"} />
                                </div>
                                <div className="flex justify-center items-center">
                                <p className="font-bold">Create Video</p>
                                </div>
                            </div>
                            </Link>
                
                        </SectionCreateVideo>


                        <Link
                            href="/menu"
                        >
                            <div className="flex gap-3 ml-1 cursor-pointer">
                            <Image
                                src={require("@/public/Images/Profile/Infomation/boy_thanh_lich.png")}
                                width={40}
                                height={40}
                                className="rounded-full"
                                alt="logo"
                            />
                            </div>
                        </Link>
                    </div>
                </HeaderTablet>

            
            </div>
        </>    
    );
};

export default SidebarHeader;
