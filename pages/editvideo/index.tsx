import EditVideo from "@/Views/EditVideo";
import dynamic from "next/dynamic";
import React from "react";

// const EditVideo = dynamic(
//   () => import("@/Views/EditVideo"), {
//   ssr: false,
// });

export default function EditVideoPage() {
  return <EditVideo />;
}
