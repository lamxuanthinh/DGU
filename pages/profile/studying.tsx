import MainLayout from "@/components/layout/MainLayout";
import ProfileLayout from "@/components/layout/ProfileLayout";
import Studying from "@/Views/Profile/Studying";

export default function index() {
  return (
      <Studying />
  );
}

index.Layout = ProfileLayout;
