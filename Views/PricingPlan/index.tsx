import Button from "@/components/common/Button";
import Image from "next/image";
import leavesYellowImage from "@/public/Images/leaves-yellow.svg";
import leavesGreenImage from "@/public/Images/leaves-green.svg";
import leavesOrangeImage from "@/public/Images/leaves-orange.svg";
import subAvt1 from "@/public/Images/Profile/Infomation/boy_thanh_lich.png";
import subAvt2 from "@/public/Images/Profile/Infomation/boy_thoi_trang.png";
import subAvt3 from "@/public/Images/Profile/Infomation/cool_green.jpg";
import startIcon from "@/public/Images/start.svg";
import { useState } from "react";

const PricingPlan = () => {
    const [indexActiveMenu, setIndexActiveMenu] = useState<number>(2);
    const menu = [
        {
            id: 1,
            name: "Monthly",
        },
        {
            id: 2,
            name: "Yearly",
        },
        {
            id: 3,
            name: "Lifetime",
        },
    ];

    const handleActiveIndexMenu = (index: number) => {
        setIndexActiveMenu(index);
    };

    const listAvatar = [subAvt1, subAvt2, subAvt3];

    const listPricingPlan = [
        {
            key: "1",
            icon: leavesYellowImage,
            background: "#A3C4F3",
            type: "Basic",
            title: "Includes family sharing",
            price: "$75.99",
            bestOffer: false,
            time: "/Per Year",
            features: [
                "Full access to all premium lessons and content",
                "Advanced interactive exercises.",
                "Personalization and custom recommendations",
            ],
        },
        {
            key: "2",
            icon: leavesGreenImage,
            background: "#90DBF4",
            type: "Popular",
            price: "$175.99",
            bestOffer: true,
            time: "/Per Year",
            features: [
                "Full access to all  premium lessons and content",
                "Advanced interactive exercise.",
                "Personalization and custom recommandations",
                "Full access to all  premium lessons and content",
                "Advanced interactive exercise",
            ],
        },
        {
            key: "3",
            icon: leavesOrangeImage,
            background: "#8EECF5",
            type: "Pro",
            price: "$775.99",
            bestOffer: false,
            time: "/Per Year",
            features: [
                "Full access to all  premium lessons and content",
                "Advanced interactive exercise.",
                "Personalization and custom recommandations",
                "Full access to all  premium lessons and content",
                "Advanced interactive exercise.",
                "Personalization and custom recommandations",
                "Full access to all  premium lessons and content",
                "Advanced interactive exercise.",
                "Personalization and custom recommandations",
            ],
        },
    ];

    return (
        <div className="mb-24 pt-10 px-5">
            <div className="flex flex-col items-center pb-10">
                <h1 className="text-4xl font-bold text-black mb-5">Pricing Plans</h1>
                <p className="text-[#616161]/[.60] text-[15px] mb-5">
                    Our pricing plans are designed to be affordable, flexible, and tailored to your unique neeeds
                </p>
                <div className="flex items-center mb-5">
                    {/* list avatar */}
                    <ul className="flex items-center translate-x-8">
                        {listAvatar.map((itemAvt, index) => (
                            <li key={index} style={{ transform: `translateX(-${index * 12}px)` }}>
                                <Image
                                    className="w-[30px] h-[30px] rounded-[50%]"
                                    src={itemAvt}
                                    alt="image avatar"
                                ></Image>
                            </li>
                        ))}
                        <li className="translate-x-[-40px]">
                            <span className="w-[30px] h-[30px] block p-2 text-center text-xs text-white rounded-[50%] bg-[#a8a8a8]">
                                ...
                            </span>
                        </li>
                    </ul>
                    <span className="text-sm text-black font-bold bg-[#F5F6F7] py-[8px] px-2 rounded-[5px]">
                        1,810M +
                    </span>
                    <span className="text-[#C5C5C6] font-bold ml-2">customers</span>
                </div>
                <div className="flex bg-[#F7F7F7]">
                    {menu.map((menuItem) => (
                        <Button
                            onClick={() => handleActiveIndexMenu(menuItem.id)}
                            className={`text-xl font-semibold px-[34px] py-[11px] ${
                                menuItem.id === indexActiveMenu ? "text-[#3983AC] bg-[#7FCFFC]" : "text-[#5A5A5A]"
                            }`}
                            key={menuItem.id}
                        >
                            {menuItem.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-8">
                {listPricingPlan.map((item) => (
                    <div
                        key={item.key}
                        className="px-6 pb-[60px] flex flex-col justify-between"
                        style={{ background: item.background }}
                    >
                        <div>
                            <div className="mt-[60px] mb-5 flex justify-between">
                                <Image src={item.icon} alt="leaves yellow" />
                                {item.bestOffer && (
                                    <Button
                                        className="bg-white py-2 px-3"
                                        leftIcon={<Image src={startIcon} alt="start icon" />}
                                    >
                                        BEST OFFER
                                    </Button>
                                )}
                            </div>
                            <h2 className="text-xl font-bold mb-4">{item.type}</h2>
                            <span className="text-[#616161]/[.62] mb-10 text-base inline-block">{item.title}</span>
                            <div className="pb-5  mb-5 border-b border-solid border-[#9F9F9F99]">
                                <h2 className="font-bold text-4xl inline-block">{item.price}</h2>
                                <span className="text-[#616161]/[.6] text-xl">{item.time}</span>
                            </div>
                            <div className="mb-[55px]">
                                <h3 className="font-bold text-base mb-3">Feature:</h3>
                                <ul className="pl-4 list-disc text-[#6161619E]">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="mb-2">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Button className="text-base font-semibold text-white bg-black w-full py-[13px]">
                                Upgrade
                            </Button>
                            <p className="text-center mt-5 font-semibold text-base">Contact Sale</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlan;
