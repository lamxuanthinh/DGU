import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLink } from "@/model/common/sidebarItem";
import { AiOutlineHome } from "react-icons/ai";
import { FaGripfire } from "react-icons/fa";
import { SlPeople, SlSettings } from "react-icons/sl";
import { MdOutlineFavoriteBorder, MdOutlineHistory } from "react-icons/md";
import { useTranslation } from "next-i18next";

const Sidebar: React.FC<{ active: boolean }> = ({ active }) => {
    const { theme } = useTheme();
    const router = useRouter();
    const { t } = useTranslation("layout");

    const navLink: NavLink[] = [
        {
            name: t("navigation.home"),
            link: "/",
            icon: <AiOutlineHome fontSize={"27px"} />,
        },
        {
            name: t("navigation.trending"),
            link: "/trending",
            icon: <FaGripfire fontSize={"27px"} />,
        },
        {
            name: t("navigation.setting"),
            link: "/setting",
            icon: <SlSettings fontSize={"25px"} />,
        },
        {
            name: t("navigation.favorites"),
            link: "/favorites",
            icon: <MdOutlineFavoriteBorder fontSize={"25px"} />,
        },
        {
            name: t("navigation.history"),
            link: "/history",
            icon: <MdOutlineHistory fontSize={"25px"} />,
        },
        {
            name: t("navigation.follow"),
            link: "/follow",
            icon: <SlPeople fontSize={"25px"} />,
        },
    ];

    return (
        <div
            className={`${
                active ? "active" : ""
            } w-[285px] lg:w-[240px] xl:w-[285px] flex items-center flex-col bg-[#ffffff] dark:bg-[#2C2C2C] rounded-[5px]`}
        >
            <div className="h-[76px] w-[100%] p-[13px] flex justify-start items-center">
                <Link href={"/"}>
                    {theme == "light" ? (
                        <Image
                            className="ml-[26px] cursor-pointer"
                            src={require("@/public/Images/logo.png")}
                            width={50}
                            alt="logo"
                        />
                    ) : (
                        <Image
                            className="ml-[26px] cursor-pointer"
                            src={require("@/public/Images/logoDark.png")}
                            width={50}
                            alt="logo"
                        />
                    )}
                </Link>
            </div>
            <div className="h-[76%] w-[100%] flex justify-center items-center mt-[20px]">
                <div className="h-full w-[calc(100%-26px)] flex flex-col items-center">
                    {navLink.map(({ name, link, icon }, index) => (
                        <div className="w-[100%]" key={index}>
                            <Link key={name} href={link}>
                                <div
                                    className={`flex items-center flex-wrap p-3 ${
                                        router.pathname === link
                                            ? "text-[#000000] dark:text-[#fff] bg-[#7FCFFC] rounded-xl"
                                            : "text-[#00000085] dark:text-[#ffffff85] hover:text-[#000000] dark:hover:text-[#fff] hover:transition hover:duration-300"
                                    }`}
                                >
                                    <div className="px-3">{icon}</div>
                                    <div className="px-3">
                                        <p className="font-bold text-[16px]">{name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
