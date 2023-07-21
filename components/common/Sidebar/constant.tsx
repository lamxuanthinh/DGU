import { MdOutlineHistory, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaGripfire} from "react-icons/fa";
import { SlSettings, SlPeople } from "react-icons/sl";
import {AiOutlineHome} from 'react-icons/ai'

import { NavLink } from "@/model/common/sidebarItem";

export const navLink: NavLink[] = [
    {
        name: "Home",
        link: "/",
        icon: <AiOutlineHome fontSize={"27px"} />,
    },
    {
        name: "Server Ranking",
        link: "/serveranking",
        icon: <FaGripfire fontSize={"27px"} />,
    },
    {
        name: "Setting",
        link: "/setting",
        icon: <SlSettings fontSize={"25px"} />,
    },
    {
        name: "Favorites",
        link: "/favorites",
        icon: <MdOutlineFavoriteBorder fontSize={"25px"} />,
    },
    {
        name: "History",
        link: "/history",
        icon: <MdOutlineHistory fontSize={"25px"} />,
    },
    {
        name: "Follow",
        link: "/follow",
        icon: <SlPeople fontSize={"25px"} />,
    },
];