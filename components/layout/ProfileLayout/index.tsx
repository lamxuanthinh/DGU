import NavigationProfile from "@/components/common/NavigationProfile";
import { LayoutProps } from "@/model";
import MyCourse from "@/Views/Profile/MyCourse";
import {
  BtnEditProfile,
  SectionDescription,
} from "@/Views/Profile/ProfileStyled";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import MainLayout from "../MainLayout";

export default function ProfileLayout(props: LayoutProps) {
  return (
    <div className="w-full rounded-[20px]">
      <div className="rounded-[20px]">
        <div className="h-[300px]">
          <div className="w-full h-[50%] relative">
            <img
              className="w-full rounded-t-[20px]"
              src="https://www.isep.ipp.pt/img/Departments/DMA_770.png"
              alt=""
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 bg-blue-200 rounded-full p-1">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
            </div>
          </div>
          <SectionDescription>
            <div className="font-bold py-2 text-xl">Giang Truong</div>
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
  );
}

ProfileLayout.Layout = MainLayout;
