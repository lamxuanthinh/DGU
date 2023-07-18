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
import Link from "next/link";



export default function ProfileLayout(props: LayoutProps) {
  return (
    <MainLayout>
      <div className="w-full rounded-[20px]">

        <div className="xl:w-full xl:h-[230px] lg:h-[180px]  flex  items-center justify-center ">
          <div className="xl:w-[700px] xl:h-[230px] lg:w-[500px] lg:h-[180px]  flex justify-start items-center ">
            <div className="xl:w-[170px] xl:h-[230px] lg:h-[180px]  flex items-center justify-center mr-[0.5rem] ">
              <div className="xl:w-[170px] xl:h-[150px] lg:w-[130px] lg:h-[120px]  flex items-center justify-center relative">
                <div className="xl:w-[150px] xl:h-[150px] lg:w-[120px] lg:h-[120px]  sm:w-[100px] sm:h-[100px] bg-[#727272dd] rounded-[50%] overflow-hidden">
                  <Image 
                    src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
                    style={{ 
                      width: '100%',
                      height: '100%',
                    }}
                    alt="avt"
                  />
                </div>
                <div className="xl:w-[60px] xl:h-[25px] xl:text-[15px]  lg:w-[30px] lg:h-[15px] lg:text-[10px] flex justify-center items-center bg-[#014F12] text-[#ffffff] font-bold rounded-[10px] absolute bottom-[20px] right-0 ">
                  PRO
                </div>
              </div>
            </div>

            <div className="xl:w-[400px] xl:h-[150px] lg:w-[300px] lg:h-[100px]  ml-[1rem] flex flex-col items-start justify-evenly " >
              
              <div className="flex flex-col items-start justify-center" >
                <div className="xl:w-full xl:h-[40px] lg:h-[30px]   flex flex-nowrap items-center ">
                  <p className="xl:text-[35px] lg:text-[30px] font-bold  " > 
                    DGU TEAM
                  </p>
                  <BsFillPatchCheckFill
                    fontFamily="30"
                    color="#7FCFFC"
                    style={{ marginLeft: "2rem" }}
                  />
                </div>
                <div className="xl:w-full xl:h-[22px] lg:h-[20px]  flex items-center ">
                  <p className="xl:text-[20px] lg:text-[15px] font-bold ">dgu@gmail.com</p>
                </div>
              </div>


              <div className="w-full xl:h-[50px] lg:h-[30px] flex flex-nowrap items-center ">
                <div className="w-auto xl:h-[35px] lg:h-full flex flex-nowrap items-center mr-[0.5rem] ">
                  <p className="font-bold xl:text-[20px] lg:text-[15px] flex  items-center justify-center">
                    31K
                  </p>
                  <p className="font-medium xl:text-[18px] lg:text-[12px] mx-[0.5rem] flex  items-center justify-center">
                    Followers
                  </p>
                </div>
                <div className="w-auto h-[35px] flex flex-nowrap items-center mr-[0.5rem] ">
                  <p className="font-bold xl:text-[20px] lg:text-[15px] flex  items-center justify-center">
                    18
                  </p>
                  <p className="font-medium xl:text-[18px] lg:text-[12px] mx-[0.5rem] flex  items-center justify-center">
                    Courses
                  </p>
                </div>
                <div className="w-auto h-[35px] flex flex-nowrap items-center mr-[0.5rem] ">
                  <p className="font-bold xl:text-[20px] lg:text-[15px] flex  items-center justify-center">
                    12K
                  </p>
                  <p className="font-medium xl:text-[18px] lg:text-[12px] mx-[0.5rem] flex  items-center justify-center">
                    Learners
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="w-[200px] h-[150px]  flex flex-col justify-evenly items-center ">
            <div className="w-[200px] h-[50px] flex items-start justify-between ">
              <div className="w-[200px] h-[50px] flex justify-evenly items-center ">
                <div className="w-[40px] h-[40px] cursor-pointer  border-[2px] border-[#6E6E6E] rounded-[10px] flex  items-center justify-center" >
                  <BsBookmarks  className={`xl:text-[22px] lg:text-[18px] `} color={'#6e6e6e'} />
                </div>
                <Link 
                  href={'#'}
                  className="w-auto h-[40px] px-[1rem] cursor-pointer  border-[2px] border-[#6E6E6E] rounded-[10px] flex  items-center justify-center" 
                >
                  <p className="text-[20px] font-bold text-[#757575] flex  items-center justify-center  ">
                    Contact
                  </p>
                </Link>
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

