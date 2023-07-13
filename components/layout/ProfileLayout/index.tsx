import Image from "next/image";
import React from "react";

import { LayoutProps } from "@/model";

import NavigationProfile from "@/components/common/NavigationProfile";
import MainLayout from "../MainLayout";
import {
  BtnEditProfile,
  SectionDescription,
} from "@/Views/Profile/ProfileStyled";

import { AiOutlineEdit } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { BsFillPatchCheckFill, BsFire, BsBookmarks } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";


export default function ProfileLayout(props: LayoutProps) {
  return (
    <MainLayout>
      <div className="w-full rounded-[20px]">
        <div className="w-full h-[250px] flex items-center justify-between ">
          <div className="w-[800px] h-[250px] flex justify-end">
            <div className="w-[300px] h-[250px] flex items-center justify-end mr-[0.5rem] ">
              <div className="w-[220px] h-[200px] relative">
                <div className="w-[200px] h-[200px] bg-[#000000] rounded-[50%] overflow-hidden">
                  <Image 
                    src={require("@/public/Images/Profile/Infomation/boy_thanh_lich.png")}
                    width={200}
                    height={200}
                    alt="avt"
                  />
                </div>
                <div className="w-[60px] h-[25px] flex justify-center items-center bg-[#014F12] text-[#ffffff] font-bold rounded-[20px] absolute bottom-[30px] right-0 ">
                  PRO
                </div>
              </div>
            </div>
            <div className="w-[500px] h-[250px] ml-[1rem] flex flex-col items-start justify-center " >
              <div className="w-full h-[65px]  flex flex-nowrap items-center ">
                <p className="text-[35px] font-extrabold  " > 
                  KENNY TRUONG
                </p>
                <BsFillPatchCheckFill
                  fontFamily="30"
                  color="#00ff1a"
                  style={{ marginLeft: "0.5rem" }}
                />
              </div>
              <div className="w-full h-[22px]  flex items-center ">
                <p className="text-[20px] font-bold ">@kennytruong3118</p>
              </div>
              <div className="w-full h-[50px]  flex flex-nowrap items-center ">
                <div className="w-auto h-[35px] flex flex-nowrap items-center mr-[0.5rem] ">
                  <p className="font-bold text-[20px] flex  items-center justify-center">
                    31K
                  </p>
                  <p className="font-medium text-[18px] mx-[0.5rem] flex  items-center justify-center">
                    Followers
                  </p>
                </div>
                <div className="w-auto h-[35px] flex flex-nowrap items-center mr-[0.5rem] ">
                  <p className="font-bold text-[20px] flex  items-center justify-center">
                    18
                  </p>
                  <p className="font-medium text-[18px] mx-[0.5rem] flex  items-center justify-center">
                    Courses
                  </p>
                </div>
                <div className="w-auto h-[35px] flex flex-nowrap items-center mr-[0.5rem] ">
                  <p className="font-bold text-[20px] flex  items-center justify-center">
                    12K
                  </p>
                  <p className="font-medium text-[18px] mx-[0.5rem] flex  items-center justify-center">
                    Learners
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          {/* <div className="w-[200px] h-[100px] flex justify-between  ">
            <div className="w-[200px] h-[50px] flex justify-evenly ">
              <div className="w-[50px] h-[50px]  border-[2px] border-[#6E6E6E] rounded-[10px] flex  items-center justify-center" >
                <BsBookmarks fontSize={'30px'} color={'#6E6E6E'} />
              </div>
              <div className="w-auto h-[50px] px-[1rem]  border-[2px] border-[#6E6E6E] rounded-[10px] flex  items-center justify-center" >
                <p className="text-[20px] font-bold text-[#757575] flex  items-center justify-center">
                  Contact
                </p>
              </div>
            </div>
          </div> */}

        </div>

        <div className=" w-full rounded-[20px]">
          <div className="m-3">
            <NavigationProfile />
          </div>
          {props.children}
        </div>
      </div>
    </MainLayout>
  );
}

