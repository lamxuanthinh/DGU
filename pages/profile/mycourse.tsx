import ProfileLayout from "@/components/layout/ProfileLayout";
import MyCourse from "@/Views/Profile/mycourse";

export default function index() {
    return (
        <MyCourse />
    );
}

index.Layout = ProfileLayout;
