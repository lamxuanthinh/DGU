import MainLayout from "@/components/layout/MainLayout";
import ProfileLayout from "@/components/layout/ProfileLayout";
import Details from "@/Views/Profile/MyCourse/Details";
import React from "react";

export default function index() {
  return (
    <ProfileLayout>
      <Details />
    </ProfileLayout>
  );
}

index.Layout = MainLayout;
