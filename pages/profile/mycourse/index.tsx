import MainLayout from "@/components/layout/MainLayout";
import ProfileLayout from "@/components/layout/ProfileLayout";
import MyCourse from "@/Views/Profile/MyCourse";

export default function index() {
  return (
    <ProfileLayout>
      <MyCourse />
    </ProfileLayout>
  );
}

index.Layout = MainLayout;
