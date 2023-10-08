import { useEffect, useState } from "react";
import Image from "next/image";
import { dataSlideSignIn } from "./constants";

interface ISlideSignIn {
    keyCurrentSlide?: number;
}

export default function SlideSignIn({ keyCurrentSlide }: ISlideSignIn) {
    const [currentSlide, setCurrentSlide] = useState(keyCurrentSlide || dataSlideSignIn[0].key);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                const nextSlideIndex =
                    (dataSlideSignIn.findIndex((slide) => slide.key === prevSlide) + 1) % dataSlideSignIn.length;
                return dataSlideSignIn[nextSlideIndex].key;
            });
        }, 5000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-[469px] bg-black dark:bg-[#2C2C2C] rounded-xl rounded-br-[50px] z-3 hidden lg:block"
        >
            {dataSlideSignIn.map((itemSlide) => {
                return (
                    itemSlide.key === currentSlide && (
                        <div key={itemSlide.key}>
                            <div className="h-[450px] relative">
                                {itemSlide.images?.map((image, key) => (
                                    <Image
                                        key={key}
                                        className={`absolute ${image.animation}`}
                                        width={image.width}
                                        height={image.height}
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-center mb-10">
                                    <div className="w-[372px] animate-fadeIn">
                                        <h1 className="text-white text-[32px] font-bold text-center pb-5">
                                            {itemSlide.title}
                                        </h1>
                                        <p className="text-white text-[16px] font-bold text-center">
                                            {itemSlide.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
            <div className="w-[100%] flex justify-center">
                <ul className="bg-[#3c3b3bd2] w-[110px] h-[30px] rounded-xl flex px-2 items-center justify-around">
                    {dataSlideSignIn.map((slideItem) => {
                        return (
                            <li
                                key={slideItem.key}
                                className={`${
                                    slideItem.key === currentSlide ? "bg-[#D9D9D9]" : ""
                                } w-[20px] h-[20px] rounded-xl flex items-center justify-center hover:cursor-pointer`}
                                onClick={() => {
                                    setCurrentSlide(slideItem.key);
                                }}
                            >
                                <div
                                    className={`${
                                        slideItem.key === currentSlide ? "bg-[#00FF85]" : "bg-[#D9D9D9]"
                                    } w-[10px] h-[10px] rounded-xl`}
                                ></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
