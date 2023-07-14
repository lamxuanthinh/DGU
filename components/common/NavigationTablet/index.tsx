import { useRouter } from 'next/router';
// import React from 'react';
import Link from 'next/link';

import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { RiBarChart2Line } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCategoryAlt, BiBell } from 'react-icons/bi';


const NavigationTablet = () => {
    const router = useRouter();

    const navLink = [
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

    

    return (
        <>
            <div className='absolute w-[500px] h-[76px] flex flex-wrap justify-center items-center rounded-[10px] bg-[#ffffff] bottom-2 left-1/2 transform -translate-x-1/2 '>
                    {navLink.map(({ name, link, icon }, index) => {
                        if( router.pathname === link) {
                            return (
                                <>
                                    <div className=' w-[100px] h-full text-[#000000] ' key={index}>
                                        <Link key={name} href={link}  className={` w-full h-full flex flex-col justify-evenly items-center  `} >
                                            {icon}
                                            <p className='font-bold  text-[16px] ' >{name}</p>
                                        </Link>
                                    </div>
                                </>
                            ); 
                        } else {
                            return (
                                <>
                                    <div className=' w-[100px] h-full text-[#00000076] ' key={index}>
                                        <Link key={name} href={link}  className={` w-full h-full flex justify-center items-center  `} >
                                            {icon}
                                        </Link>
                                    </div>
                                </>
                            );
                        } 
                        
                    })}
                </div>
        </>
    )
}


export default NavigationTablet;
