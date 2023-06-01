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
import { FaHome } from "react-icons/fa";
import { BiHome, BiLogOut } from "react-icons/bi";
import { BsPerson, BsFire, BsFillPeopleFill } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const router = useRouter();

  const navLink = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome fontSize={"25px"} />,
    },
    {
      name: "Profile",
      link: "/profile/mycourse",
      icon: <BsPerson fontSize={"25px"} strokeWidth={"0.5px"} />,
    },
    {
      name: "Server Ranking",
      link: "/serveranking",
      icon: <BsFire fontSize={"25px"} />,
    },
    {
      name: "Setting",
      link: "/setting",
      icon: <FiSettings fontSize={"25px"} />,
    },
    {
      name: "Like",
      link: "/like",
      icon: <AiOutlineHeart fontSize={"25px"} />,
    },
    {
      name: "History",
      link: "/history",
      icon: <AiOutlineHistory fontSize={"25px"} />,
    },
    {
      name: "Follow",
      link: "/follow",
      icon: <BsFillPeopleFill fontSize={"25px"} />,
    },
  ];

  return (
    <div className="w-[19%] flex items-center flex-col bg-[#fffcfca8] rounded-[20px]">
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
          {navLink.map(({ name, link, icon }) => (
            <div className="w-[100%]">
              <Link key={name} href={link}>
                <NavigationItem
                  className={`flex items-center flex-wrap p-3 ${
                    router.pathname === link
                      ? "text-[#000000] bg-[white]"
                      : "text-[#00000085]"
                  }  `}
                >
                  <div className="px-3">{icon}</div>
                  <div className="px-3">
                    <p className="font-bold text-[18px]">{name}</p>
                  </div>
                </NavigationItem>
              </Link>
            </div>
          ))}
        </Navigation>
      </div>

      <div className="w-[100%]">
        <Link href="/" className="flex justify-center">
          <BaseNavigationItem
            className={`text-[#00000085] flex items-center flex-wrap p-3`}
          >
            <div className="px-3">
              <BiLogOut fontSize={"25px"} />
            </div>
            <div className="px-3">
              <p className="font-bold text-[18px]">Log out</p>
            </div>
          </BaseNavigationItem>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
