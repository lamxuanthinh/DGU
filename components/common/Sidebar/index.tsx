import {
  Navigation,
  NavigationItem,
  BaseNavigationItem,
} from "@/components/common/Sidebar/sidebarStyled";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AiOutlineDoubleLeft,
  AiOutlineHeart,
  AiOutlineHistory,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsHearts, BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineHistory } from "react-icons/md";
import { RiHome3Line, RiBarChart2Line } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";


const Sidebar = () => {
  const router = useRouter();

  const navLink = [
    {
      name: "Home",
      link: "/",
      icon: <RiHome3Line fontSize={"25px"} />,
    },
    {
      name: "Server Ranking",
      link: "/serveranking",
      icon: <RiBarChart2Line fontSize={"25px"} />,
    },
    {
      name: "Setting",
      link: "/setting",
      icon: <AiFillSetting fontSize={"25px"} />,
    },
    {
      name: "Favorites",
      link: "/favorites",
      icon: <BsHearts fontSize={"25px"} />,
    },
    {
      name: "History",
      link: "/history",
      icon: <MdOutlineHistory fontSize={"25px"} />,
    },
    {
      name: "Follow",
      link: "/follow",
      icon: <BsFillPeopleFill fontSize={"25px"} />,
    },
  ];

  return (
    <div className="w-[285px] flex items-center flex-col bg-[#ffffff] rounded-[20px]">
      <div className="h-[76px] w-[100%] p-[13px] flex justify-between items-center">
        <Image
          className="ml-[26px]"
          src={require("@/public/Images/logo.png")}
          width={50}
          alt="logo"
        />
        <AiOutlineDoubleLeft
          className="mr-[13px]"
          color="#000000"
          fontSize={"20px"}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="h-[76%] w-[100%] flex justify-center items-center mt-[20px]">
        <Navigation>
          {navLink.map(({ name, link, icon }, index) => (
            <div className="w-[100%]" key={index}>
              <Link key={name} href={link}>
                <NavigationItem
                  className={`flex items-center flex-wrap p-3 ${
                    router.pathname === link
                      ? "text-[#000000] bg-[white]"
                      : "text-[#00000085]"
                  }`}
                >
                  <div className="px-3">{icon}</div>
                  <div className="px-3">
                    <p className="font-bold text-[16px]">{name}</p>
                  </div>
                </NavigationItem>
              </Link>
            </div>
          ))}
        </Navigation>
      </div>

      
    </div>
  );
};

export default Sidebar;
