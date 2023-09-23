import Image from "next/image";
import bannerTopImage from "@/public/Images/Trending/slider-main.png";
import avtImage from "@/public/Images/Trending/avt-slider.png";

import Button from "@/components/common/Button";
import { AiOutlineDown } from "react-icons/ai";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { GiFilmStrip } from "react-icons/gi";

import {
    DATA_TRENDING_PEOPLE,
    DATA_FEATURED_VIDEOS,
    DATA_TOP_FEATURED_VIDEOS,
    DATA_SHORTS,
} from "./constants";
import ItemCardCourse from "@/components/common/ItemCardCourse";
import ItemCardVideo from "@/components/common/ItemCardVideo";
import ItemCardShort from "@/components/common/IteamCardShort";

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
        <section className="p-2 w-full">
            <div className="w-full mb-[35px] bg-[#5B2A07] relative md:mr-2 rounded-[5px] h-full max-h-[350px]">
                <Image
                    className="absolute right-6 xl:right-32 max-h-[350px] bottom-0"
                    src={bannerTopImage}
                    alt="banner image"
                />
                <div className="absolute text-white bg-black/[.45] 2xl:max-w-none max-w-[420px] w-full sm:w-auto h-full sm:h-auto sm:top-20 sm:left-10 md:top-[80px] p-5 rounded-[5px]">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6">
                        Meditation course for beginners
                    </h2>
                    <div className="flex items-center">
                        <Image
                            className="w-10 h-10 mr-2 rounded-[50%] border-2 border-solid border-slate-50"
                            src={avtImage}
                            alt="avatar"
                        />
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
            <div className="px-2 lg:px-10">
                <div className="mb-10">
                    <h2 className="mb-5 text-[#757474] font-semibold text-lg">Top content creators of the past week</h2>
                    <div className="flex justify-center flex-wrap w-full gap-5 md:mr-5">
                        {DATA_TRENDING_PEOPLE.map((item, index) => (
                            <div
                                key={index}
                                className="flex-1 text-center flex flex-col items-center border border-solid border-black/[.13] pb-2 rounded-md min-w-[125px] max-w-[200px] cursor-pointer hover:-translate-y-2 transition-transform duration-500"
                            >
                                <Image
                                    width={200}
                                    height={200}
                                    className="w-full h-[150px] rounded-md object-cover"
                                    src={item.srcImage}
                                    alt="avatar"
                                />
                                <h4 className="text-[#010101] dark:text-white dark:shadow-2xl text-lg font-semibold">{item.name}</h4>
                                <span className="text-[#7E7E7E] text-[15px] font-medium">{item.views}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-[35px]">
                    <h2 className="mb-5 text-[#757474] text-lg font-semibold">Top Trending courses</h2>
                    <div className="flex flex-wrap m-[-12px]">
                        {DATA_FEATURED_VIDEOS.map((item, index) => (
                            <ItemCardCourse key={index} dataCard={item} />
                        ))}
                    </div>
                    <Button className="mx-auto mt-8 font-semibold" rightIcon={<AiOutlineDown />}>
                        Show More
                    </Button>
                </div>
                <div className="mb-[35px]">
                    <h2 className="mb-5 text-[#757474] text-lg font-semibold">Top featured videos</h2>
                    <div className="flex flex-wrap mx-[-12px]">
                        {DATA_TOP_FEATURED_VIDEOS.map((item, index) => (
                            <ItemCardVideo key={index} dataVideo={item} />
                        ))}
                    </div>
                    <Button className="mx-auto mt-8 font-semibold" rightIcon={<AiOutlineDown />}>
                        Show More
                    </Button>
                </div>

                <div className="relative py-[8px] mb-20">
                    <div className="flex items-center text-[#8a8a8a] mb-4">
                        <GiFilmStrip className="text-2xl" />
                        <h5 className="font-semibold text-xl ml-2">Shorts</h5>
                    </div>
                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 mb-3">
                        {courseShowArray.map((item) => (
                          <ItemCardShort key={item.id} dataShort={item}/>
                        ))}
                    </ul>
                    <Button className="mx-auto text-2xl px-5 py-2 mt-1" onClick={handleToggleMoreCourse}>
                        {isShowMoreCourse ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Trending;
