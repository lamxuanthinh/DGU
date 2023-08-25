import Image from "next/image";
import bannerTopImage from "@/public/Images/Trending/slider-main.png";
import bannerSubImage from "@/public/Images/Trending/slider-sub-main.png";

import Button from "@/components/common/Button";
import { AiOutlineDown } from "react-icons/ai";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { GiFilmStrip } from "react-icons/gi";

import {
    DATA_TRENDING_PEOPLE,
    DATA_FEATURED_VIDEOS,
    DATA_TOP_FEATURED_VIDEOS,
    DATA_TRENDING_COURSE,
    DATA_SHORTS,
} from "./constants";

const Trending = () => {
    const [courseShowArray, setCourseShowArray] = useState<Array<any>>(DATA_SHORTS.slice(0, 5));
    const [isShowMoreCourse, setIsShowMoreCourse] = useState<boolean>(false);

    useEffect(() => {
        if (isShowMoreCourse) {
            setCourseShowArray(DATA_SHORTS);
        } else {
            setCourseShowArray(DATA_SHORTS.slice(0, 5));
        }
    }, [isShowMoreCourse]);

    const handleToggleMoreCourse = () => {
        setIsShowMoreCourse(!isShowMoreCourse);
    };

    return (
        <section className="py-4 px-5 w-full">
            <h2 className="text-[32px] text-[#757474] font-semibold mb-4">Trending</h2>
            <div className="flex mb-20">
                <div className="w-full 2xl:w-[60%]">
                    <div className="bg-[#5B2A07] relative md:mr-2 rounded-[5px] h-full max-h-[350px]">
                        <Image className="float-right max-h-[350px]" src={bannerTopImage} alt="banner image" />
                        <div className="absolute text-white bg-black/[.45] py-8 2xl:py-0 right-8 md:w-[55%] top-[40px] md:top-[70px] left-8 p-[10px] rounded-[5px]">
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6">
                                Meditation course for beginners
                            </h2>
                            <div className="flex items-center">
                                <Image className="w-10 h-10 mr-2" src={bannerTopImage} alt="avatar" />
                                <div>
                                    <h3 className="text-base md:text-lg font-semibold ">Thomas Tump</h3>
                                    <p className="text-[#CFCFCF]">
                                        <span>52K views</span>
                                        <span>•</span>
                                        <span>2 days ago</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-[14px] text-[#757474] font-semibold text-lg">Top prominent individuals </p>
                </div>
                <div className="hidden 2xl:block w-[40%] relative mr-2 rounded-[5px]  max-h-[350px]">
                    <div className="bg-[#5B2A07] h-full">
                        <Image className="float-right w-full max-h-[350px]" src={bannerSubImage} alt="banner image" />
                        <div className="absolute text-white bg-black/[.45] w-[85%] 2xl:w-[50%] top-[70px] left-8 p-[10px] rounded-[5px]">
                            <h2 className="text-4xl font-semibold mb-6">How to dance</h2>
                            <div className="flex items-center">
                                <Image className="w-10 h-10 mr-2" src={bannerTopImage} alt="avatar" />
                                <div>
                                    <h3 className="text-lg font-semibold ">Thomas Tump</h3>
                                    <p className="text-[#CFCFCF]">
                                        <span>52K views</span>
                                        <span>•</span>
                                        <span>2 days ago</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-[14px] text-[#757474] font-semibold text-lg">Top prominent individuals </p>
                </div>
            </div>
            <div className="flex mb-10 flex-wrap">
                <div className="flex flex-wrap w-full gap-x-[20px] md:mr-5 mb-6 md:mb-0">
                    {DATA_TRENDING_PEOPLE.map((item, index) => (
                        <div key={index} className="flex-1 text-center">
                            <Image className="w-full max-h-[110px]" src={item.srcImage} alt="avatar" />
                            <h4 className="text-[#010101] text-lg font-semibold">{item.name}</h4>
                            <span className="text-[#7E7E7E] text-[15px] font-medium">{item.views}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="">
                <h2 className="mb-6 text-[#757474] text-lg font-semibold">Top featured videos</h2>
                <div className="flex flex-wrap mb-4 mx-[-12px]">
                    {DATA_FEATURED_VIDEOS.map((item, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-3">
                            <div className="flex flex-col shadow-lg rounded-[5px] lg:h-full 2xl:h-auto">
                                <div className="h-[50%] relative">
                                    <Image src={item.srcImage} alt="course image" className="w-full h-full"></Image>
                                    <div className="flex absolute gap-x-1 bottom-[10px] left-3">
                                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                                            {item.info[0].lesson} Lesson
                                        </span>
                                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                                            {item.info[1].time} Time
                                        </span>
                                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                                            {item.info[2].comment} Comments
                                        </span>
                                    </div>
                                </div>
                                <div className="px-3 py-4">
                                    <h3 className="text-base font-semibold mb-8">{item.title}</h3>
                                    <div className="flex mb-[25px]">
                                        <span className="mr-7">Beginner</span>
                                        <ul className="flex items-center">
                                            {item.avatar.map((itemAvt, index) => (
                                                <li key={index} style={{ transform: `translateX(-${index * 12}px)` }}>
                                                    <Image
                                                        className="w-[30px] h-[30px] rounded-[50%]"
                                                        src={itemAvt}
                                                        alt="image avatar"
                                                    ></Image>
                                                </li>
                                            ))}
                                            <li className="translate-x-[-40px]">
                                                <span className="p-2 text-center text-xs text-white rounded-[50%] bg-[#7D7979]">
                                                    +5
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <span className="text-sm font-semibold">{item.price}</span>
                                            <span className="mx-2">/</span>
                                            <span className="text-[#888888] font-semibold text-xs">
                                                {item.priceType}
                                            </span>
                                        </div>
                                        <Button>{item.author}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="mx-auto my-6 font-semibold" rightIcon={<AiOutlineDown />}>
                    Show More
                </Button>
            </div>
            <div className="mb-10">
                <h2 className="mb-6 text-[#757474] text-lg font-semibold">Top featured videos</h2>
                <div className="flex mb-4 flex-wrap mx-[-12px]">
                    {DATA_TOP_FEATURED_VIDEOS.map((item, index) => (
                        <div key={index} className="2xl:w-1/5 xl:w-1/3 md:w-1/2 w-full p-3">
                            <div className="min-w-[300px]">
                                <div className="flex flex-col shadow-lg rounded-[5px] overflow-hidden">
                                    <div className="h-[200px] 2xl:h-[130px] relative">
                                        <Image src={item.srcImage} alt="course image" className="w-full h-full" />
                                    </div>
                                    <div className="px-3 py-4">
                                        <h3 className="text-lg leading-6 font-semibold line-clamp-2">{item.title}</h3>
                                        <p className="my-1 text-[#757474]">{item.author} 💻</p>
                                        <p className="text-[#757474]">
                                            {item.view} views • {item.timeCreate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="mx-auto my-6 font-semibold" rightIcon={<AiOutlineDown />}>
                    Show More
                </Button>
            </div>
            <div className="">
                <h2 className="mb-6 text-[#757474] text-lg font-semibold">Top trending programing courses</h2>
                <div className="flex flex-wrap mb-4 mx-[-12px]">
                    {DATA_TRENDING_COURSE.map((item, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-3">
                            <div className="flex flex-col shadow-lg overflow-hidden rounded-[5px]">
                                <div className="h-[50%] relative">
                                    <Image src={item.srcImage} alt="course image" className="w-full h-full"></Image>
                                    <div className="flex absolute gap-x-1 bottom-[10px] left-3">
                                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                                            {item.info[0].lesson} Lesson
                                        </span>
                                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                                            {item.info[1].time} Time
                                        </span>
                                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                                            {item.info[2].comment} Comments
                                        </span>
                                    </div>
                                </div>
                                <div className="px-3 py-4">
                                    <h3 className="text-base font-semibold mb-8">{item.title}</h3>
                                    <div className="flex mb-[25px]">
                                        <span className="mr-7">Beginner</span>
                                        <ul className="flex items-center">
                                            {item.avatar.map((itemAvt, index) => (
                                                <li key={index} style={{ transform: `translateX(-${index * 12}px)` }}>
                                                    <Image
                                                        className="w-[30px] h-[30px] rounded-[50%]"
                                                        src={itemAvt}
                                                        alt="image avatar"
                                                    ></Image>
                                                </li>
                                            ))}
                                            <li className="translate-x-[-40px]">
                                                <span className="p-2 text-center text-xs text-white rounded-[50%] bg-[#7D7979]">
                                                    +5
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <span className="text-sm font-semibold">{item.price}</span>
                                            <span className="mx-2">/</span>
                                            <span className="text-[#888888] font-semibold text-xs">
                                                {item.priceType}
                                            </span>
                                        </div>
                                        <Button>{item.author}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="mx-auto my-6 font-semibold" rightIcon={<AiOutlineDown />}>
                    Show More
                </Button>
            </div>
            <div className="relative bg-white py-[8px] mb-20">
                <div className="flex items-center text-[#8a8a8a] mb-4">
                    <GiFilmStrip className="text-2xl" />
                    <h5 className="font-semibold text-xl ml-2">Shorts</h5>
                </div>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 mb-3">
                    {courseShowArray.map((item, index) => (
                        <li key={index} className="w-full place-content-center">
                            <Image
                                src={item.srcImage}
                                alt="image course"
                                className="h-[350px] w-full rounded-[5px]"
                            ></Image>
                            <h4 className="font-semibold text-lg mt-4">
                                {item.title}
                                <br />
                                {item.hashtag}
                            </h4>
                            <span className="text-sm text-[#979292]">{item.view}K views</span>
                        </li>
                    ))}
                </ul>
                <Button className="mx-auto text-2xl px-5 py-2 mt-1" onClick={handleToggleMoreCourse}>
                    {isShowMoreCourse ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                </Button>
            </div>
        </section>
    );
};

export default Trending;
