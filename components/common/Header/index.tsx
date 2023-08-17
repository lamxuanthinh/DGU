import { SectionLogin, SectionCreateVideo } from "@/components/common/Header/headerStyled";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogIn, BiMessageRounded, BiVideoPlus } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import { dataMenuNav } from "../Menu/constants";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";

const Header = () => {
    const [checkAuth, setCheckAuth] = useState();

    useEffect(() => {
        const userId: any = localStorage.getItem("userId");
        setCheckAuth(userId);
    }, []);

    return (
        <div className="flex items-center justify-between bg-[#fff] rounded-[5px] py-3 px-3 h-[65px] z-[1]">
            <div className="relative w-[50%] flex flex-nowrap rounded-2xl p-2">
                <SearchBar />
            </div>
            <div className="flex flex-nowrap items-center">
                <div className="flex items-center">
                    <div className="mx-2 p-2 rounded-[50%] bg-[#F6F6F6] flex justify-center items-center cursor-pointer">
                        <IoMdNotificationsOutline color="#000000" fontSize={"25px"} />
                    </div>
                    <div className="mx-2 p-2 rounded-[50%] bg-[#F6F6F6] flex justify-center items-center cursor-pointer">
                        <BiMessageRounded color="#000000" fontSize={"25px"} />
                    </div>
                </div>
                <SectionCreateVideo>
                    <Link href="/upload" className="cursor-pointer">
                        <div className="py-2 px-4 rounded-[20px] bg-[#F6F6F6] flex justify-center">
                            <div className="flex justify-center items-center pr-3">
                                <BiVideoPlus color="#000000" fontSize={"25px"} />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="font-bold">Create Video</p>
                            </div>
                        </div>
                    </Link>
                </SectionCreateVideo>
                {checkAuth ? (
                    <Menu menuItems={dataMenuNav}>
                        <div className="flex gap-3 ml-1 cursor-pointer">
                            <Image
                                src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
                                width={40}
                                height={40}
                                className="rounded-full bg-[#727272dd] "
                                alt="logo"
                            />
                        </div>
                    </Menu>
                ) : (
                    <SectionLogin>
                        <Link
                            href={"/login"}
                            className="bg-[#A9DEF9] rounded-[15px] flex justify-center items-cente py-2 px-4"
                        >
                            <div className="flex justify-center items-center pr-3">
                                <p className="font-bold">Sign in now</p>
                            </div>
                            <div className="flex justify-start items-center">
                                <BiLogIn color="#000000" fontSize={"25px"} />
                            </div>
                        </Link>
                    </SectionLogin>
                )}
            </div>
        </div>
    );
};

export default Header;
