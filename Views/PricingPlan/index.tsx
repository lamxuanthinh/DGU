import { useState } from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import startIcon from "@/public/Images/start.svg";
import { listPricingPlan, menu, listAvatar } from "./constants";

const PricingPlan = () => {
    const [indexActiveMenu, setIndexActiveMenu] = useState<number>(2);

    const handleActiveIndexMenu = (index: number) => {
        setIndexActiveMenu(index);
    };

    return (
        <div className="mb-24 pt-10 px-5">
            <div className="flex flex-col items-center pb-10">
                <h1 className="text-4xl font-bold text-black mb-5 dark:text-white">Pricing Plans</h1>
                <p className="text-[#616161]/[.8] text-base mb-5 text-center dark:text-white">
                    Our pricing plans are designed to be affordable, flexible, and tailored to your unique neeeds
                </p>
                <div className="flex items-center mb-5">
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
                    <span className="text-center text-sm text-black font-bold bg-[#F5F6F7] py-[8px] px-2 rounded-[5px]">
                        1,810M +
                    </span>
                    <span className="text-[#C5C5C6] font-bold ml-2 dark:text-[#C5C5C6]">customers</span>
                </div>
                <div className="flex bg-[#F7F7F7] shadow-sm dark:bg-[#525252] rounded">
                    {menu.map((menuItem) => (
                        <Button
                            onClick={() => handleActiveIndexMenu(menuItem.id)}
                            className={`text-base lg:text-lg xl:text-xl font-semibold px-5 xl:px-[34px] py-[11px] ${
                                menuItem.id === indexActiveMenu
                                    ? "text-[#3983AC] bg-[#7FCFFC] rounded-md dark:text-white"
                                    : "text-[#5A5A5A] dark:text-white"
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
                        className="px-6 pb-[60px] flex flex-col justify-between xl:justify-start bg-[url('/Images/bg-pricing-plan.png')] dark:bg-[url('/Images/bg-pricing-plan-dark.png')] bg-no-repeat bg-cover bg-center shadow-lg hover:scale-[1.01] transition-all duration-500 rounded-xl cursor-pointer"
                    >
                        <div>
                            <div className="mt-[60px] mb-5 flex justify-between">
                                <Image src={item.icon} alt="icons pricing plan" />
                                {item.bestOffer && (
                                    <Button
                                        className="bg-white py-2 px-3 dark:text-black"
                                        leftIcon={<Image src={startIcon} alt="start icon" />}
                                    >
                                        BEST OFFER
                                    </Button>
                                )}
                            </div>
                            <h2 className="text-xl font-bold mb-4">{item.type}</h2>
                            <span className="text-[#616161]/[.62] mb-10 text-base inline-block dark:text-white">{item.title}</span>
                            <div className="pb-5  mb-5 border-b border-solid border-[#9F9F9F99]">
                                <h2 className="font-bold text-4xl inline-block">{item.price}</h2>
                                <span className="text-[#616161]/[.6] text-xl dark:text-white">{item.time}</span>
                            </div>
                            <div className="mb-[55px]">
                                <h3 className="font-bold text-base mb-3">Feature:</h3>
                                <ul className="pl-4 list-disc text-[#6161619E] dark:text-white">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="mb-2">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Button className="text-base font-semibold text-white bg-black w-full py-[13px] dark:bg-white dark:text-black">
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
