import { Navigation, NavigationItem, BaseNavigationItem } from "@/components/layout/Sidebar/sidebarStyled";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
    AiOutlineDoubleLeft,
    AiOutlineHeart,
    AiOutlineHistory,
} from "react-icons/ai";
import { BiHome, BiLogOut } from "react-icons/bi";
import { BsPerson, BsFire, BsFillPeopleFill } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";

const Sidebar = () => {

    const router = useRouter();

    const navLink = [
        {
            name: "Home",
            link: "/",
            icon: <BiHome  fontSize={"30px"} />
        },
        {
            name: "Profile",
            link: "/profile",
            icon: <BsPerson
                        fontSize={"30px"}
                        strokeWidth={"0.5px"}
                    />
        },
        {
            name: "Server Ranking",
            link: "/serveranking",
            icon: <BsFire  fontSize={"30px"} />
        },
        {
            name: "Setting",
            link: "/setting",
            icon: <TbSettings2  fontSize={"30px"} />
        },
        {
            name: "Like",
            link: "/like",
            icon: <AiOutlineHeart  fontSize={"30px"} />
        },
        {
            name: "History",
            link: "/history",
            icon: <AiOutlineHistory  fontSize={"30px"} />
        },
        {
            name: "Follow",
            link: "/follow",
            icon: <BsFillPeopleFill  fontSize={"30px"} />
        },
    ] 
    
    console.log(router.pathname)



    return (
        <div className="w-[285px] h-[741px] bg-[#fffcfca8] rounded-[20px] flex flex-col absolute top-[10px] left-[15px]">
            <div className="w-[100%] h-[70px]  flex flex-nowrap items-center relative">
                <div className="w-[60px] h-[60px] flex justify-center items-center left-[35px] absolute">
                    <Image
                        src={require("@/public/Images/Layout/sidebar/logo.png")}
                        width={60}
                        height={60}
                        alt="logo"
                    />
                </div>
                <div className="w-[60px] h-[60px] flex justify-center items-center  right-[0px] absolute">
                    <AiOutlineDoubleLeft
                        color="#000000"
                        fontSize={"25px"}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>

            <div className="w-[100%] h-[375px] flex justify-center items-center  mt-[20px]">
                <Navigation>
                    {navLink.map(({name, link, icon}) => (
                        <Link key={name} href={link} className={`w-[100%] bg-transparent`}>
                            <NavigationItem className={` ${router.pathname === link ? 'text-[#000000] bg-[white]' :  'text-[#00000085]' }  `}>
                                <div className="w-[100px] h-[100%] flex justify-center items-center ">
                                    {icon}
                                </div>
                                <div className="w-[159px] h-[100%] flex justify-start items-center  ">
                                    <p className="font-bold text-[18px]">{name}</p>
                                </div>
                            </NavigationItem>
                        </Link>
                    ))}
                    
                </Navigation>
            </div>

            <div className="w-[100%] h-[50px]  absolute bottom-[60px]">
                <Link href={`/`} className={`w-[100%] bg-transparent`}>
                    <BaseNavigationItem className={`text-[#00000085]`}>
                        <div className="w-[100px] h-[100%] flex justify-center items-center ">
                            <BiLogOut fontSize={"30px"} />
                        </div>
                        <div className="w-[159px] h-[100%] flex justify-start items-center  ">
                            <p className="font-bold text-[18px]">Log out</p>
                        </div>
                    </BaseNavigationItem>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
