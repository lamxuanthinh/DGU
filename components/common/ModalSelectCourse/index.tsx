import { useState } from "react";
import Image from "next/image";
import CourseDetailsForm from "./CourseDetailsForm";
import CoursesDetails from "./CoursesDetails";
import CourseItemForm from "./CourseItemForm";
import PreviewCourse from "./PreviewCourse";
import CoursesList from "./CoursesList";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";

export default function SelectCourseModal() {
    const [stepSelected, setStepSelected] = useState<number>(0);
    const [stateSelected, setStateSelected] = useState("Selected");

    const stepsOption = [
        {
            icon: <GrSelect fontSize={20} className="mx-3" />,
            title: "CHOOSE COURSE",
            content: "Choose course to upload",
        },
        {
            icon: <FaWpforms fontSize={20} className="mx-3" />,
            title: "FILL FORM",
            content: "Fill the video information",
        },
        {
            icon: <BiEditAlt fontSize={25} className="mx-3" />,
            title: "EDIT",
            content: "Edit process",
        },
        {
            icon: <IoMdDoneAll fontSize={23} className="mx-3" />,
            title: "DONE !!",
            content: "The process is completed.",
        },
    ];

    const descriptionCourse = [
        {
            image: require("@/public/Images/CreateCourse/createCourse1.png"),
            title: "How to focus?",
            description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
            cost: "FREE",
            count: "10",
        },
        {
            image: require("@/public/Images/CreateCourse/createCourse2.png"),
            title: "How to design?",
            description: "Understand user needs, research, sketch ideas, iterate, gather feedback..",
            cost: "$100",
            count: "12",
        },
        {
            image: require("@/public/Images/CreateCourse/createCourse3.png"),
            title: "English in my life ",
            description: "English has enriched my life, enabling global communication, expanding...",
            cost: "FREE",
            count: "30",
        },
        {
            image: require("@/public/Images/CreateCourse/createCourse3.png"),
            title: "English in my life ",
            description: "English has enriched my life, enabling global communication, expanding...",
            cost: "FREE",
            count: "30",
        },
        {
            image: require("@/public/Images/CreateCourse/createCourse3.png"),
            title: "English in my life ",
            description: "English has enriched my life, enabling global communication, expanding...",
            cost: "FREE",
            count: "30",
        },
    ];

    const dataCardDetail = [
        {
            id: 1,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail1.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
        },
        {
            id: 2,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail2.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 2: Chăm chỉ chưa chắc đã thành công | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý  • 31.103 lượt xem • 10 tháng trước",
        },
        {
            id: 3,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail3.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 3: Cố gắng để làm gì ?  | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý  • 42.103 lượt xem • 9 tháng trước",
        },
        {
            id: 4,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail4.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 4: Team work hiệu quả ?  | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý  • 12.103 lượt xem • 5 tháng trước",
        },
        {
            id: 5,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail5.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 5: Học nhiều ngôn ngữ để làm gì? | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý  • 2.103 lượt xem • 3 tháng trước",
        },
        {
            id: 6,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail6.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 6: Học cho đến bao giờ ? | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý  • 103 lượt xem • 1 tuần trước",
        },
        {
            id: 7,
            image: (
                <Image
                    className="rounded-md h-full"
                    alt=""
                    src={require("@/public/Images/Layout/Profile/detail6.png")}
                />
            ),
            title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 6: Học cho đến bao giờ ? | Tùng Tâm Lý",
            title2: "Tùng Tâm Lý  • 103 lượt xem • 1 tuần trước",
        },
    ];

    const handleChangeStep = (index: number) => {
        setStepSelected(index);
    };

    const handleOpenCreateCourse = () => {
        setStateSelected("Create");
    };

    const handleCourseSelected = () => {
        setStateSelected("Selected");
    };

    return (
        <div className="w-[90%] h-[83%] bg-[#c4c4c4] rounded-xl p-2">
            <div className="w-full h-full grid grid-cols-10 gap-2 overflow-hidden">
                <div className="bg-white rounded-xl col-span-2 p-2">
                    <div
                        className="max-h-[8vh] flex justify-between p-2"
                        style={{
                            marginBottom: "calc(6vh + 40px)",
                        }}
                    >
                        <RiCloseCircleFill fontSize={35} className="text-[#979797] font-bold" />
                    </div>
                    <div className="">
                        {stepsOption.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${
                                        stepSelected == index ? "bg-[#d1d1d1]" : "bg-[#e9e9e9] scale-95"
                                    } grid grid-cols-4 rounded my-3 px-2 py-2 hover:cursor-pointer transition-colors duration-500`}
                                    onClick={() => {
                                        handleChangeStep(index);
                                    }}
                                >
                                    <div className="flex justify-center items-center">{item.icon}</div>
                                    <div className="col-span-3 flex items-center">
                                        <div>
                                            <h2 className="font-bold">{item.title}</h2>
                                            <p className="font-semibold">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="bg-white rounded-xl col-span-4 px-4 py-2">
                    {stepSelected == 0 && (
                        <CoursesList
                            data={descriptionCourse}
                            handleOpenCreateCourse={handleOpenCreateCourse}
                            handleCourseSelected={handleCourseSelected}
                        />
                    )}
                    {stepSelected == 1 && (
                        <div className="h-full grid gap-4 pb-4">
                            <div>
                                <div className="max-h-[8vh] flex justify-between p-2 mb-3">
                                    <div className="text-[25px] font-bold px-5">Fill Infomation for Video Detail</div>
                                </div>
                                <div className="max-h-[12vh] grid grid-cols-4 w-full px-5 mb-4">
                                    <div className="col-span-1">
                                        <Image
                                            className="rounded-md h-full"
                                            src={require("@/public/Images/CreateCourse/createCourse1.png")}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-span-3 mx-3">
                                        <div className="text-[16px] font-bold mb-2">How to focus?</div>
                                        <div className="flex justify-start items-end">
                                            <div className="flex pb-1">
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                            </div>
                                            <h2 className="text-[16px] font-bold mx-3">4.8</h2>
                                            <p className="text-[#656464]">10.000 Rating</p>
                                        </div>
                                    </div>
                                </div>
                                <CourseItemForm />
                            </div>
                            <div className="flex justify-between">
                                <div
                                    onClick={() => {
                                        setStepSelected(stepSelected - 1);
                                    }}
                                    className="flex items-center border-2 border-[#858585] text-[16px] text-[#858585] px-5 py-1 mx-8 font-bold rounded hover:cursor-pointer hover:opacity-90"
                                >
                                    <MdOutlineArrowBackIos />
                                    <p className="pl-2">Back</p>
                                </div>
                                <div className="flex items-center border-2 border-[#858585] text-[16px] text-[#858585] px-5 py-1 mx-8 font-bold rounded hover:cursor-pointer hover:opacity-90">
                                    <p className="pr-2">Preview</p>
                                    <MdOutlineArrowForwardIos />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="h-full bg-white rounded-xl col-span-4 p-2 overflow-hidden">
                    {stepSelected == 0 && (
                        <div className="h-full grid gap-4 pb-4">
                            <div>
                                <div className="flex justify-between p-2 mb-3">
                                    <h1 className="text-[25px] font-bold px-5">
                                        {stateSelected == "Selected" ? "How to focus?" : "Create Course"}
                                    </h1>
                                    {stateSelected == "Selected" ? (
                                        <div className="flex justify-center items-end">
                                            <div className="flex pb-1">
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                            </div>
                                            <h2 className="text-[20px] font-bold mx-3">4.8</h2>
                                            <p className="text-[#656464]">10.000 Rating</p>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="w-full flex justify-center" style={{ height: "calc(58vh + 28px)" }}>
                                    {stateSelected == "Selected" ? (
                                        <div className="overflow-auto scrollbar-none w-[90%]">
                                            {dataCardDetail.map((item) => {
                                                return <CoursesDetails key={item.id} data={item} />;
                                            })}
                                        </div>
                                    ) : (
                                        <div className="w-[90%]">
                                            <CourseDetailsForm />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div
                                    className="flex items-center border-2 border-black text-[16px] text-black px-5 py-1 mx-8 font-bold rounded hover:cursor-pointer hover:opacity-90"
                                    onClick={() => {
                                        if (stateSelected == "Selected") {
                                            setStepSelected(stepSelected + 1);
                                        } else {
                                            setStateSelected("Selected");
                                        }
                                    }}
                                >
                                    <p className="pr-2">NEXT</p>
                                    <MdOutlineArrowForwardIos />
                                </div>
                            </div>
                        </div>
                    )}
                    {stepSelected == 1 && (
                        <div className="h-full grid gap-4 pb-4">
                            <div className="h-[70vh]">
                                <PreviewCourse />
                            </div>
                            <div className="flex justify-end">
                                <div
                                    className="flex items-center border-2 border-black text-[16px] text-black px-5 py-1 mx-8 font-bold rounded hover:cursor-pointer hover:opacity-90"
                                    onClick={() => {
                                        if (stateSelected == "Selected") {
                                            setStepSelected(stepSelected + 1);
                                        } else {
                                            setStateSelected("Selected");
                                        }
                                    }}
                                >
                                    <p className="pr-2">NEXT</p>
                                    <MdOutlineArrowForwardIos />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
