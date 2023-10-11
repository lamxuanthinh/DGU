import { useAppContext } from "@/Context";
import Image from "next/image";
import Link from "next/link";
import { BiLogIn, BiVideoPlus } from "react-icons/bi";
import Menu from "../Menu";
import { dataMenuNav } from "../Menu/constants";
import SearchBar from "../SearchBar";

const SidebarHeader: React.FC<{ active: boolean }> = ({ active }) => {
    const { session } = useAppContext();

    return (
        <>
            <div className="w-full h-[65px] hidden sm:flex flex-wrap items-center justify-between">
                <div
                    className={` ${
                        active ? "active" : ""
                    } w-[70px] sm:w-[115px] h-full items-center sm:justify-center flex`}
                >
                    <Link
                        href="/"
                        className="w-full h-full rounded-l-[5px] bg-[#fff] flex items-center justify-center cursor-pointer "
                    >
                        <Image className="w-[40px]" width={60} src={require("@/public/Images/logo.png")} alt="logo" />
                    </Link>
                </div>
                <div
                    className={`${
                        active ? "active" : ""
                    } flex items-center justify-end bg-[#fff] py-3 pr-3 h-[65px] sm:w-[calc(100%-115px)]`}
                >
                    <div className="flex flex-nowrap items-center sm:justify-between w-full justify-start">
                        <SearchBar />

                        {session && session.user.avatar ? (
                            <div className="flex justify-end w-full">
                                <div className="w-[182px] h-full justify-center items-center hidden sm:flex">
                                    <Link href="/upload" className="cursor-pointer">
                                        <div className="py-2 px-4 rounded-[20px] bg-[#F6F6F6] flex justify-center">
                                            <div className="flex justify-center items-center pr-3">
                                                <BiVideoPlus color="#000000" fontSize={"25px"} />
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <p className="font-bold w-[100px]">Create Video</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <Menu menuItems={dataMenuNav}>
                                    <div className="flex gap-3 mx-4 cursor-pointer">
                                        <Image
                                            src={`${session.user.avatar}`}
                                            width={40}
                                            height={40}
                                            className="rounded-full bg-[#727272dd] "
                                            alt="logo"
                                        />
                                    </div>
                                </Menu>
                            </div>
                        ) : (
                            <div className="flex">
                                <Link href="/upload" className="cursor-pointer">
                                    <div className="w-[170px] py-2 px-4 mx-2 rounded-[20px] bg-[#F6F6F6] dark:bg-[#454545] flex justify-center">
                                        <div className="flex justify-center items-center pr-3">
                                            <BiVideoPlus fontSize={"25px"} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <p className="font-bold">Create Video</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="w-[158px] lg:w-[176px] h-full flex justify-end items-center">
                                    <Link
                                        href={"/signin"}
                                        className="bg-[#7FCFFC] rounded-[15px] flex justify-center items-cente py-2 px-4"
                                    >
                                        <div className="flex justify-center items-center pr-3">
                                            <p className="font-bold">Sign in now</p>
                                        </div>
                                        <div className="flex justify-start items-center">
                                            <BiLogIn fontSize={"25px"} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarHeader;
