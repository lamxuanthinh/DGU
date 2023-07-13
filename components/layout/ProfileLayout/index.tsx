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
        <div className="w-full h-[230px]  flex  items-center justify-center ">
          <div className="w-[700px] h-[250px]  flex justify-start items-center ">
            <div className="w-[170px] h-[250px]  flex items-center justify-center mr-[0.5rem] ">
              <div className="w-[170px] h-[150px]  flex items-center justify-center relative">
                <div className="w-[150px] h-[150px] bg-[#727272dd] rounded-[50%] overflow-hidden">
                  <Image 
                    src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
                    width={150}
                    height={150}
                    alt="avt"
                  />
                </div>
                <div className="w-[60px] h-[25px] flex justify-center items-center bg-[#014F12] text-[#ffffff] font-bold rounded-[10px] absolute bottom-[20px] right-0 ">
                  PRO
                </div>
              </div>
            </div>
            <div className="w-[500px] h-[150px] ml-[1rem] flex flex-col items-start justify-evenly " >
              
              <div className="flex flex-col items-start justify-center" >
                <div className="w-full h-[40px]   flex flex-nowrap items-center ">
                  <p className="text-[35px] font-bold  " > 
                    DGU TEAM
                  </p>
                  <BsFillPatchCheckFill
                    fontFamily="30"
                    color="#7FCFFC"
                    style={{ marginLeft: "2rem" }}
                  />
                </div>
                <div className="w-full h-[22px]  flex items-center ">
                  <p className="text-[20px] font-bold ">dgu@gmail.com</p>
                </div>
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
          <div className="w-[200px] h-[150px]  flex flex-col justify-evenly items-center ">
            <div className="w-[200px] h-[50px] flex items-start justify-between ">
              <div className="w-[200px] h-[50px] flex justify-evenly items-center ">
                <div className="w-[40px] h-[40px]  border-[2px] border-[#6E6E6E] rounded-[10px] flex  items-center justify-center" >
                  <BsBookmarks fontSize={'22px'} color={'#6E6E6E'} />
                </div>
                <div className="w-auto h-[40px] px-[1rem]  border-[2px] border-[#6E6E6E] rounded-[10px] flex  items-center justify-center" >
                  <p className="text-[20px] font-bold text-[#757575] flex  items-center justify-center">
                    Contact
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[50px] flex flex-wrap items-start justify-evenly ">
                <div className="w-[45px] h-[45px]  border-[5px] border-[#6E6E6E] bg-[#ff00004a] rounded-[50%] flex  items-center justify-center" >
                  <BsFire fontSize={'24px'} color={'#FF0000'} />
                </div>
                <div className="w-[45px] h-[45px]  border-[5px] border-[#6E6E6E] bg-[#9000ff4c] rounded-[50%] flex  items-center justify-center" >
                  <AiTwotoneLike fontSize={'24px'} color={'#4D0188'} />
                </div>
                <div className="w-[45px] h-[45px]  border-[5px] border-[#6E6E6E] bg-[#ffc8005b] rounded-[50%] flex  items-center justify-center" >
                  <FaTrophy fontSize={'24px'} color={'#685800'} />
                </div>
            </div>
          </div>
        </div>

        <div className=" w-full  rounded-[20px]">
          <div className="">
            <NavigationProfile />
          </div>
          {props.children}
        </div>
      </div>
    </MainLayout>
  );
}

