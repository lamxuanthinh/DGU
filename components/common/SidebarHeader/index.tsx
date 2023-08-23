import {
    SectionCreateVideo,
    HeaderTablet,
    MenuButton
} from "@/components/common/Header/headerStyled";

import Image from "next/image";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";
import {  BiVideoPlus } from "react-icons/bi";


const SidebarHeader: React.FC<{active: boolean}> = ({ active }) => {

    return (
        <>
            <div className="w-full h-[65px] flex flex-wrap items-center justify-between" >
                <MenuButton className={` ${active ? 'active' : ''} w-[70px] sm:w-[115px] rounded-[5px] h-full items-center sm:justify-center hidden sm:flex`}>
                    <Link href="/" className="w-full  rounded-[5px] h-full bg-[#fff] flex items-center justify-center cursor-pointer " > 
                        <Image
                        className="w-[40px] hidden sm:block"
                            width={60}
                            src={require("@/public/Images/logo.png")}
                            alt="logo"
                        />
                    </Link>
                </MenuButton>
                <HeaderTablet className={`${active ? 'active' : ''} flex items-center justify-end bg-[#fff] rounded-[5px] py-3 px-3 h-[65px] w-full sm:w-[calc(100%-120px)]`}>
                    <div className="flex flex-nowrap items-center sm:justify-between w-full justify-start">
                        <div className="flex items-center">
                            <div className="mx-2 p-3 rounded-[50%] bg-[#F6F6F6] flex justify-center items-center cursor-pointer">
                                <BsSearch color="#000000" fontSize={"18px"} />
                            </div>
                        </div>
                        <Link href="/" className="w-full  rounded-[5px] h-full bg-[#fff] flex items-center justify-center cursor-pointer " > 
                        <Image
                        className="w-[40px] sm:hidden"
                            width={60}
                            src={require("@/public/Images/logo.png")}
                            alt="logo"
                        />
                    </Link>
                        <SectionCreateVideo className="hidden sm:flex">
                            <Link
                                href="/upload"
                                className="cursor-pointer"
                            >
                            <div className="py-2 px-4 rounded-[20px] bg-[#F6F6F6] flex justify-center">
                                <div className="flex justify-center items-center pr-3">
                                <BiVideoPlus color="#000000" fontSize={"25px"} />
                                </div>
                                <div className="flex justify-center items-center">
                                <p className="font-bold w-[100px]">Create Video</p>
                                </div>
                            </div>
                            </Link>
                        </SectionCreateVideo>
                        <Link
                            href="/menu"
                             className="flex-shrink-0"
                        >
                            <div className="flex gap-3 ml-1 cursor-pointer">
                            <Image
                                src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
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
