import { AiOutlineHistory, AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai';
import { GiUpgrade } from 'react-icons/gi';

import { NavLinkMenuItemTablet } from '@/model/common/sidebarItem';

export const navigationList: NavLinkMenuItemTablet[] = [
    {
        name: "History",
        link: "/",
        icon: <AiOutlineHistory fontSize={'30px'} />, 
    },
    {
        name: "Favourites",
        link: "/",
        icon: <AiOutlineHeart fontSize={'30px'} />, 
    },
    {
        name: "Setting",
        link: "/",
        icon: <AiOutlineSetting fontSize={'30px'} />, 
    },
    {
        name: "Upgrade Account",
        link: "/",
        icon: <GiUpgrade fontSize={'30px'} />, 
    },
]