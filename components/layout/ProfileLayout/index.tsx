import NavigationProfile from "@/components/common/NavigationProfile";
import Image from "next/image";
import { LayoutProps } from "@/model";

import {
  BtnEditProfile,
  SectionDescription,
} from "@/Views/Profile/ProfileStyled";

import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import MainLayout from "../MainLayout";

export default function ProfileLayout(props: LayoutProps) {
  return (
    <MainLayout>
      <div className="w-full rounded-[20px]">
        <div className="rounded-[20px]">
          <div className="h-[300px]">
            <div className="w-full h-[50%] relative ">
              <div className="w-full h-[100%] relative overflow-hidden">
                <Image
                  src={require("@/public/Images/Profile/Infomation/nam1.jpg")}
                  className="w-full h-full rounded-t-[20px]"
                  style={{
                    overflow: "hidden",
                    objectFit: "cover"
                  }}
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 bg-blue-200 rounded-full p-1">
                <Image  
                  src={require("@/public/Images/Profile/Infomation/boy_thanh_lich.png")}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <SectionDescription>
              <div className="font-bold py-2 text-xl">Tung Kenny</div>
              <div className="font-bold py-2">
                If your central character has a quirky name or a title you can
                definitely incorporate
              </div>

              <BtnEditProfile>
                <AiOutlineEdit fontSize={"30px"} className="p-1 mr-[10px]" />
                <p>Edit Profile</p>
              </BtnEditProfile>
            </SectionDescription>
          </div>
        </div>
        <div className="bg-[#eef3f9] w-full rounded-[20px]">
        <div className="m-3">
          <NavigationProfile />
        </div>
          {props.children}

        </div>
      </div>
    </MainLayout>
  );
}

