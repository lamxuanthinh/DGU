import { IMenuItems } from "@/model/menuItems";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineHistory, AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export const dataMenuNav: Array<IMenuItems> = [
    {
        key: 1,
        name: "Profile",
        href: "/profile/mycourse",
        icon: CgProfile,
    },
    {
        key: 2,
        name: "Like",
        href: "/like",
        icon: AiOutlineHeart,
    },
    {
        key: 3,
        name: "History",
        href: "/history",
        icon: AiOutlineHistory,
    },
    {
        key: 4,
        name: "Setting",
        href: "/setting",
        icon: AiOutlineSetting,
    },
    {
        key: 5,
        name: "Logout",
        href: "/login",
        icon: BiLogOut,
    },
];
