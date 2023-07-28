import React from "react";

import { LayoutProps } from "@/model";

import NavigationProfile from "@/components/common/NavigationProfile";
import ProfileHeader from "@/components/common/ProfileHeader";
import MainLayout from "../MainLayout";

export default function ProfileLayout(props: LayoutProps) {
  return (
    <MainLayout>
      <div className="w-full rounded-[20px]">
        <ProfileHeader />

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

