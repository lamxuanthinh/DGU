import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { navigationList } from './constant';

import { FiMoreVertical } from 'react-icons/fi';
import { BsBoxFill } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineChatBubbleOutline, MdOutlinePeopleAlt } from 'react-icons/md';
import { RiBarChart2Line } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';

import styled from "styled-components";


const HeaderName = styled.div`
    width: calc(100% - 150px);
    height: 100%;
`;

const MenuItem = styled.div`
    width: calc(100% - 160px);
`;

const MenuBottom = styled.div`
    margin-top: 5px;
    min-height: calc(100% - 490px);
`;

const MenuListBottom = styled.div`
    min-height: calc(100% - 80px);
    /* overflow: scroll; */
`;

const LogoutBtn = styled.div`
    width: calc(100% - 20px);
`;

const ScrollContainer = styled.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;






const MenuTablet = () => {

    return (
        <>
            <ScrollContainer className='w-full h-full bg-[#DBDBDB] absolute top-0 left-0 z-10 overflow-y-scroll ' >
                <div className='w-full h-[230px] rounded-[5px] bg-[#ffffff] flex flex-col justify-center items-center '>
                    <div className='w-full h-[150px] border-b border-[#0000001d] border-[1px] flex justify-center items-center ' >
                        <div className=' w-[150px] h-full  flex justify-center items-center   ' >
                            <Image
                                className={` w-[100px] h-[100px] object-cover `}
                                src={require('@/public/Images/Profile/Infomation/boy_thoi_trang.png')}
                                alt=""
                            />
                        </div>
                        <HeaderName className=' flex flex-wrap justify-between items-center ' >
                            <div className=' w-auto h-full flex justify-center items-center ' >
                                <div className=' h-[100px] flex flex-col justify-start items-start' >
                                    <p className='font-bold text-[24px] ' >
                                        DGU TEAM
                                    </p>
                                    <p className='font-normal text-[15px] ' >
                                        dgu000@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className='w-[150px] h-[15px] flex justify-center items-center '>
                                <FiMoreVertical fontSize={`25px`} />
                            </div>
                        </HeaderName>
                    </div>
                    <div className='w-full h-[80px] flex ' >
                        <div className='w-[50%] h-full flex flex-wrap justify-center items-center text-[#00000074]'>
                            <AiOutlineMail fontSize={`25px`} className={`mx-[1rem] cursor-pointer`} />
                            <MdOutlineChatBubbleOutline fontSize={`25px`} className={`mx-[1rem] cursor-pointer`} />
                            <AiOutlineCalendar fontSize={`25px`} className={`mx-[1rem] cursor-pointer`} />
                        </div>
                        <div className='w-[50%] h-full flex justify-end items-center'>
                            <Link
                                href={`#`}
                                className={`w-[180px] h-[50px] rounded-[10px] font-bold mr-[15px]  border-[#96969677] border-[2px]  flex flex-wrap justify-evenly items-center`}
                            >
                                View Profile
                                <BsBoxFill fontSize={`20px`} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[240px] mt-[5px] rounded-[5px] bg-[#ffffff] flex flex-col justify-center items-center '>
                    <Link
                        href={`#`}
                        className='w-full h-[80px] flex flex-wrap justify-start items-center  text-[#00000075]'
                    >
                        <div className='w-[160px] flex  justify-center items-center '>
                            <MdOutlinePeopleAlt fontSize={`30px`} />
                        </div>
                        <MenuItem className='  flex justify-start items-center ' >
                            <p className='text-[24px] font-bold text-[#00000075] ' >Following and share</p>
                        </MenuItem>
                    </Link>
                    <Link
                        href={`#`}
                        className='w-full h-[80px] flex flex-wrap justify-start items-center  text-[#00000075]  '
                    >
                        <div className='w-[160px] flex  justify-center items-center '>
                            <RiBarChart2Line fontSize={`30px`} />
                        </div>
                        <MenuItem className='  flex justify-start items-center ' >
                            <p className='text-[24px] font-bold text-[#00000075] ' >Following and share</p>
                        </MenuItem>
                    </Link>
                    <Link
                        href={`#`}
                        className='w-full h-[80px] flex flex-wrap justify-start items-center  text-[#00000075]  '
                    >
                        <div className='w-[160px] flex  justify-center items-center '>
                            <BiBell fontSize={`30px`} />
                        </div>
                        <MenuItem className='  flex justify-start items-center ' >
                            <p className='text-[24px] font-bold text-[#00000075] ' >Following and share</p>
                        </MenuItem>
                    </Link>
                </div>
                <MenuBottom className='w-full bg-[#ffffff] rounded-[5px] flex flex-col justify-start items-center'>
                    <MenuListBottom className='w-full   ' >
                        {navigationList.map(({ name, link, icon }) => {
                            return (
                                <>
                                    <Link
                                        href={link}
                                        className='w-full h-[80px] flex flex-wrap justify-start items-center  text-[#00000075]  '
                                    >
                                        <div className='w-[160px] flex  justify-center items-center'>
                                            {icon}
                                        </div>
                                        <MenuItem className='  flex justify-start items-center'>
                                            <p className='text-[24px] font-bold text-[#00000075]'>{name}</p>
                                        </MenuItem>
                                    </Link>
                                </>
                            )
                        })}
                    </MenuListBottom>
                    <div className=' w-full h-[80px] flex justify-center items-center'>
                        <LogoutBtn className='h-[50px] rounded-[5px] border-[2px] border-[#9696966a] text-[18px] font-bold cursor-pointer flex justify-center items-center '>
                            Logout
                        </LogoutBtn>
                    </div>
                </MenuBottom>


            </ScrollContainer>
        </>
    )
}

export default MenuTablet; 
