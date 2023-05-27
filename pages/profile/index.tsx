
import  MainLayout  from "@/components/layout/MainLayout";

import Profile from "@/Views/Profile";

const ProfilePage = () => {
    return (
        <Profile
        dataUser={{
            nameUser: "LMD",
            pathAvatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            pathCoverImage: "https://www.isep.ipp.pt/img/Departments/DMA_770.png",
            description:
            "If your central character has a quirky name or a title you can definitely incorporate",
        }}
        ></Profile>
    );
};

export default ProfilePage;

ProfilePage.Layout = MainLayout;
