
import { BsArrowUpRight, BsSearch } from "react-icons/bs";
import { HiOutlineFolderAdd } from "react-icons/hi";
import Image from "next/image";
import { IDescriptionCourse } from "@/model/course";

interface ISelectCourseProps {
    handleOpenCreateCourse: () => void;
    handleCourseSelected: () => void;
    data: IDescriptionCourse[];
}

export default function CoursesList({ data, handleOpenCreateCourse, handleCourseSelected }: ISelectCourseProps) {
    return (
        <div>
            <div className="max-h-[8vh] flex justify-between p-2 mb-3">
                <div className="text-[25px] font-bold px-5">Course List</div>
                <div
                    className="flex justify-center items-center px-5 hover:cursor-pointer"
                    onClick={() => {
                        handleOpenCreateCourse();
                    }}
                >
                    <HiOutlineFolderAdd fontSize={20} className="mx-3" />
                    <p className="font-semibold text-[#152049]">Create course</p>
                </div>
            </div>
            <div className="max-h-[6vh] w-full flex flex-nowrap rounded p-2 border-[#b6b6b6] border-2 mb-[28px]">
                <div className="w-[50px] flex justify-center items-center">
                    <BsSearch color="#909090" fontSize={"15px"} fontWeight={700} />
                </div>
                <div className="w-[410px] flex justify-center items-center">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="text-[#8F8F8F] w-[100%] bg-transparent border-none outline-none"
                    />
                </div>
            </div>
            <div className="max-h-[54vh] overflow-auto scrollbar-none snap-y snap-mandatory">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="mb-4 grid grid-cols-7">
                            <div className="col-span-3">
                                <Image className="rounded-md h-full" src={item.image} alt="" />
                            </div>
                            <div className="py-2 px-3 col-span-4">
                                <div className="flex justify-between mb-2">
                                    <h1 className="font-bold">{item.title}</h1>
                                </div>
                                <div className="mb-2">
                                    <p className="text-[12px] font-semibold">{item.description}</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex justify-center">
                                        <h1 className="text-black font-bold pr-2 rounded text-[18px]">{item.count}</h1>
                                        <div>video</div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center custom-shadow border border-black text-[14px] text-black px-2 mx-2 hover:cursor-pointer hover:opacity-80"
                                        onClick={() => {
                                            handleCourseSelected();
                                        }}
                                    >
                                        <div className="font-bold py-1 pr-2">CHOOSE</div>
                                        <BsArrowUpRight className="font-bold" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
