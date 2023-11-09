import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ISlideSignIn {
    keyCurrentSlide?: number;
}

export default function SlideSignIn({ keyCurrentSlide }: ISlideSignIn) {
    const t = useTranslations("auth");

    const dataSlideSignIn = [
        {
            key: 1,
            title: t("slide.card-1.title"),
            subtitle: t("slide.card-1.description"),
            images: [
                {
                    animation: "animate-wiggle",
                    width: 330,
                    height: 285,
                    src: require("@/public/Images/Login/model2/frame.png"),
                    alt: "frame",
                },
                {
                    animation: "animate-spinLeft-Model2-earth",
                    width: 65,
                    height: 85,
                    src: require("@/public/Images/Login/model2/support_1.png"),
                    alt: "earth",
                },
                {
                    animation: "animate-spinLeft-Model2-battery",
                    width: 150,
                    height: 154,
                    src: require("@/public/Images/Login/model2/support_2.png"),
                    alt: "battery",
                },
                {
                    animation: "animate-slideToRightModel1",
                    width: 350,
                    height: 350,
                    src: require("@/public/Images/Login/model2/person.png"),
                    alt: "person",
                },
            ],
        },
        {
            key: 2,
            title: t("slide.card-2.title"),
            subtitle: t("slide.card-2.description"),
            images: [
                {
                    animation: "animate-wiggle",
                    width: 350,
                    height: 285,
                    src: require("@/public/Images/Login/model1/frame.png"),
                    alt: "frame",
                },
                {
                    animation: "animate-spinLeft",
                    width: 65,
                    height: 85,
                    src: require("@/public/Images/Login/model1/support_1.png"),
                    alt: "cup",
                },
                {
                    animation: "animate-spinRight",
                    width: 150,
                    height: 154,
                    src: require("@/public/Images/Login/model1/support_2.png"),
                    alt: "effect Book Shadow",
                },
                {
                    animation: "animate-slideToRightModel3",
                    width: 350,
                    height: 350,
                    src: require("@/public/Images/Login/model1/person.png"),
                    alt: "person",
                },
            ],
        },
        {
            key: 3,
            title: t("slide.card-3.title"),
            subtitle: t("slide.card-3.description"),
            images: [
                {
                    animation: "animate-wiggleModel3",
                    width: 350,
                    height: 285,
                    src: require("@/public/Images/Login/model3/frame.png"),
                    alt: "frame",
                },
                {
                    animation: "animate-spinLeftModal3",
                    width: 150,
                    height: 85,
                    src: require("@/public/Images/Login/model3/support_1.png"),
                    alt: "rainbow",
                },
                {
                    animation: "animate-spinLeftBottomModel3",
                    width: 65,
                    height: 85,
                    src: require("@/public/Images/Login/model3/support_3.png"),
                    alt: "calender",
                },
                {
                    animation: "animate-slideToRightModel4",
                    width: 350,
                    height: 350,
                    src: require("@/public/Images/Login/model3/person.png"),
                    alt: "person",
                },
            ],
        },
        {
            key: 4,
            title: t("slide.card-4.title"),
            subtitle: t("slide.card-4.description"),
            images: [
                {
                    animation: "animate-wiggleModel4",
                    width: 350,
                    height: 285,
                    src: require("@/public/Images/Login/model4/frame.png"),
                    alt: "frame",
                },
                {
                    animation: "animate-spinLeft2",
                    width: 85,
                    height: 85,
                    src: require("@/public/Images/Login/model4/support_1.png"),
                    alt: "book",
                },
                {
                    animation: "animate-spinRight2",
                    width: 150,
                    height: 154,
                    src: require("@/public/Images/Login/model4/support_2.png"),
                    alt: "book shadow",
                },
                {
                    animation: "animate-slideToRightModel2",
                    width: 350,
                    height: 350,
                    src: require("@/public/Images/Login/model4/person.png"),
                    alt: "person",
                },
            ],
        },
    ];
    
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
