import { IMenuItems } from "@/model/common/menuItems";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineHistory, AiOutlineSetting } from "react-icons/ai";

export const dataMenuNav: Array<IMenuItems> = [
  {
    key: 1,
    name: "Profile",
    href: "/profile",
    icon: <CgProfile fontSize="20px" />,
  },
  {
    key: 2,
    name: "Like",
    href: "/like",
    icon: <AiOutlineHeart fontSize="20px" />,
  }, {
    key: 3,
    name: "History",
    href: "/history",
    icon: <AiOutlineHistory fontSize="20px" />,
  }, {
    key: 4,
    name: "Setting",
    href: "/setting",
    icon: <AiOutlineSetting fontSize="20px" />,
  },
  {
    key: 5,
    name: "Logout",
    href: "/logout",
    icon: <CgLogOut fontSize="20px" />,
  }
];
