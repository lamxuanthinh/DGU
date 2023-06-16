import {
  HeaderStyle,
  HeaderInput,
  SectionIcon,
  SectionLogin,
  SectionProfile,
  SectionCreateVideo,
} from "@/components/common/Header/headerStyled";

import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRounded, BiVideoPlus } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import { dataMenuNav } from "@/public/data/menuNavigation";

const Header = () => {

  return (
    <div className="flex items-center justify-between bg-[#fff] rounded-[20px] py-3 px-3 h-[65px]">
      <div className="w-[460px] flex flex-nowrap bg-[#F6F6F6] rounded-2xl p-2">
        <div className="w-[50px] flex justify-center items-center ">
          <BsSearch color="#909090" fontSize={"15px"} fontWeight={700} />
        </div>
        <div className="w-[410px] flex justify-center items-center">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="w-[100%] bg-transparent border-none outline-none"
          />
        </div>
      </div>

      <div className="flex flex-nowrap items-center">
        <div className="flex items-center">
          <div className="mx-2 p-2 rounded-[50%] bg-[#F6F6F6] flex justify-center items-center">
            <IoMdNotificationsOutline color="#000000" fontSize={"25px"} />
          </div>
          <div className="mx-2 p-2 rounded-[50%] bg-[#F6F6F6] flex justify-center items-center">
            <BiMessageRounded color="#000000" fontSize={"25px"} />
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
        {/* <SectionLogin>
          <Link
            href={"/login"}
            className="bg-[#A9DEF9] rounded-[15px] flex justify-center items-cente py-2 px-4"
          >
            <div className="flex justify-center items-center pr-3">
              <p className="font-bold">Sign in now</p>
            </div>
            <div className="flex justify-start items-center">
              <BiLogIn color="#000000" fontSize={"25px"} />
            </div>
          </Link>
        </SectionLogin> */}
        <Menu menuItems={dataMenuNav}>
          <div className="flex gap-3 ml-1 cursor-pointer">
            <Image
              src={require("@/public/Images/Profile/Infomation/boy_thanh_lich.png")}
              width={48}
              height={48}
              className="rounded-full"
              alt="logo"
            />
            <div className="flex flex-col ">
              <h4 className="text-lg font-bold">Dung Dev</h4>
              <i className="text-xs">Provider</i>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
