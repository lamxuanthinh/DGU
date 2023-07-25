import { AiFillHome } from 'react-icons/ai';
import { RiBarChart2Line } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCategoryAlt, BiBell } from 'react-icons/bi';

import { NavLink } from '@/model/common/sidebarItem';


export const navLink: NavLink[] = [
    {
        name: "Home",
        link: "/",
        icon: <AiFillHome fontSize={"28px"} />,
    },
    {
        name: "Ranking",
        link: "/serveranking",
        icon: <RiBarChart2Line fontSize={"28px"} />,
    },
    {
        name: "Trends",
        link: "/trends",
        icon: <BiCategoryAlt fontSize={"28px"} />,
    },
    {
        name: "Notifications",
        link: "/notifications",
        icon: <BiBell fontSize={"28px"} />,
    },
    {
        name: "Profile",
        link: "/profile/mycourse",
        icon: <BsFillPersonFill fontSize={"28px"} />,
    },
];