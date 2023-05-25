import {
  HeaderStyle,
  HeaderInput,
  SectionIcon,
  SectionLogin,
  SectionCreateVideo,
} from "./headerStyled";

import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRounded, BiVideoPlus } from "react-icons/bi";

import Image from "next/image";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="w-[460px] h-[50px] flex flex-nowrap bg-[#F6F6F6] rounded-[20px] ml-[13px]">
        <div className="w-[50px] h-[50px] flex justify-center items-center ">
          <BsSearch color="#909090" fontSize={"25px"} fontWeight={700} />
        </div>
        <div className="w-[410px]  flex justify-center items-center">
          <HeaderInput type="text" name="search" placeholder="Search..." />
        </div>
      </div>

      <div className="w-[470px] h-[100%]  mr-[13px] flex flex-nowrap">
        <SectionIcon>
          <div className="w-[50px] h-[50px] rounded-[50%] bg-[#F6F6F6] flex justify-center items-center">
            <IoMdNotificationsOutline color="#000000" fontSize={"25px"} />
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] bg-[#F6F6F6] flex justify-center items-center">
            <BiMessageRounded color="#000000" fontSize={"25px"} />
          </div>
        </SectionIcon>

        <SectionCreateVideo>
          <div className="w-[170px] h-[44px] rounded-[20px] bg-[#F6F6F6] flex flex-nowrap">
            <div className="w-[50px] h-[44px] flex justify-center items-center">
              <BiVideoPlus color="#000000" fontSize={"25px"} />
            </div>
            <div className="w-[120px] h-[44px]   flex justify-center items-center">
              <p className="font-bold">Create Video</p>
            </div>
          </div>
        </SectionCreateVideo>

        <SectionLogin>
          <div className="w-[75px] h-[100%] flex justify-center items-center">
            <div className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center bg-[#F6F6F6] overflow-hidden">
              <Image
                src={require("@/public/Images/layout/header/boy_chu_tich.png")}
                width={50}
                height={50}
                alt="User avata"
              />
            </div>
          </div>
          <div className="w-[102px] h-[100%] flex flex-col justify-center">
            <p className="w-[100%] font-bold text-[16px]">Tung Kenny</p>
            <p className="w-[100%] font-thin text-[11px]">Professcor</p>
          </div>
        </SectionLogin>
      </div>
    </HeaderStyle>
  );
};

export default Header;
