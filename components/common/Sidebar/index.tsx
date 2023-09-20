import { Navigation, NavigationItem, SideNav } from "@/components/common/Sidebar/sidebarStyled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLink } from "./constant";

const Sidebar: React.FC<{ active: boolean }> = ({ active }) => {
    const router = useRouter();

    return (
        <SideNav
            className={`${active ? "active" : ""} w-[285px] flex items-center flex-col bg-[#ffffff] rounded-[5px]`}
        >
            <div className=" h-[76px] w-[100%] p-[13px] flex justify-start items-center">
                <Link href={"/"}>
                    <Image
                        className="ml-[26px] cursor-pointer"
                        src={require("@/public/Images/logo.png")}
                        width={50}
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="h-[76%] w-[100%] flex justify-center items-center mt-[20px]">
                <Navigation>
                    {navLink.map(({ name, link, icon }, index) => (
                        <div className="w-[100%]" key={index}>
                            <Link key={name} href={link}>
                                <NavigationItem
                                    className={`flex items-center flex-wrap p-3 ${
                                        router.pathname === link ? "text-[#000000] bg-[#7FCFFC]" : "text-[#00000085]"
                                    }`}
                                >
                                    <div className="px-3">{icon}</div>
                                    <div className="px-3">
                                        <p className="font-bold text-[16px]">{name}</p>
                                    </div>
                                </NavigationItem>
                            </Link>
                        </div>
                    ))}
                </Navigation>
            </div>
        </SideNav>
    );
};

export default Sidebar;
