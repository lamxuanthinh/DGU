import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import LessonFillForm from "@/components/common/ModalSelectCourse/LessonFillForm";
import CourseItemForm from "@/components/common/ModalSelectCourse/CourseItemForm";
import PreviewCourse from "@/components/common/ModalSelectCourse/PreviewCourse";
import SelectCourseLayout from "@/components/layout/SelectCourseLayout";
import { myCourse } from "./constant";
import { SchemaCourse } from "@/utils/rules";
import { MdOutlineAddchart, MdOutlinePlayLesson } from "react-icons/md";
import { BsEyeFill, BsSearch } from "react-icons/bs";
import PreviewLesson from "@/components/common/ModalSelectCourse/PreviewLesson";

interface IMyCourseData {
    id: string | number;
    title: string;
    content: string;
    quantity: string | number;
    price: string;
    image: any;
}

type FormCourseData = Pick<SchemaCourse, "title" | "description" | "classify" | "price" | "image" | "author">;
type FormLessonData = Pick<SchemaCourse, "title" | "description" | "image" | "author">;

export default function Test() {
    const [stepSelected, setStepSelected] = useState<number>(0);
    const [stepCreateCourse, setStepCreateCourse] = useState(0);
    const [courseSelected, setCourseSelected] = useState<IMyCourseData>();
    const [myCourseData, setMyCourseData] = useState<Array<IMyCourseData>>();
    const titleSteps: string[] = ["Choose course", "Fill form", "Edit", "Fill form video short", "Preview video short"];

    const {
        register: courseRegister,
        handleSubmit: handleCourseSubmit,
        setValue: setValueOfCourse,
        watch: watchValueOfCourse,
        reset: resetCourseData,
    } = useForm<FormCourseData>({});

    const {
        register: lessonRegister,
        handleSubmit: handleLessonSubmit,
        setValue: setValueOfLesson,
        watch: watchValueOfLesson,
        reset: resetLessonData,
    } = useForm<FormLessonData>({});

    const handleBackStep = () => {
        setStepSelected(stepSelected - 1);
        setStepCreateCourse(0);
    };

    const handleNextStep = () => {
        setStepSelected(stepSelected + 1);
        setStepCreateCourse(0);
    };

    const onSubmitCourseItemForm = handleCourseSubmit(async (data) => {
        const newMyCourseData = myCourseData;
        newMyCourseData &&
            newMyCourseData.push({
                id: newMyCourseData.length,
                title: data.title,
                content: data.description,
                quantity: 0,
                price: `$ ${data.price}`,
                image: (
                    <Image width={100} height={100} className="rounded-md w-full h-full" src={`${data.image}`} alt="" />
                ),
            });

        setMyCourseData(newMyCourseData);

        setStepCreateCourse(0);

        resetCourseData({
            author: "",
            classify: "",
            description: "",
            image: "",
            price: "",
            title: "",
        });
    });

    const onSubmitLessonItemForm = handleLessonSubmit(async (data) => {
        console.log(data);
        handleNextStep();
        resetLessonData({
            description: "",
            image: "",
            title: "",
        });
    });

    useEffect(() => {
        setMyCourseData(myCourse);
        setCourseSelected(myCourse[0]);
    }, []);

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#939393]">
            <SelectCourseLayout
                stepSelected={stepSelected}
                setStepSelected={setStepSelected}
                setStepCreateCourse={setStepCreateCourse}
                titleSteps={titleSteps}
            >
                {stepSelected == 0 && stepCreateCourse == 0 && (
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex h-[90%] pt-5">
                            <div className="w-[65%]">
                                <div className="grid grid-cols-3 gap-1 overflow-y-auto scrollbar-none max-h-[450px]">
                                    {myCourseData &&
                                        courseSelected &&
                                        myCourseData.map((item: any, index: number) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        setCourseSelected(item);
                                                    }}
                                                    className={`h-[140px] p-1 rounded-md ${
                                                        item.id == courseSelected.id &&
                                                        "border-[3px] border-[#7FCFFC] transition-all duration-200"
                                                    }`}
                                                >
                                                    {item.image}
                                                </div>
                                            );
                                        })}
                                    <div
                                        className={`h-[140px] flex items-center justify-center p-1 rounded-md text-[#3983AC] bg-[#f4fbff] hover:cursor-pointer hover:border-[3px] hover:border-[#7FCFFC] transition-all duration-200`}
                                        onClick={() => {
                                            setStepCreateCourse(1);
                                        }}
                                    >
                                        <div>
                                            <div className="flex justify-center">
                                                <MdOutlineAddchart fontSize={24} />
                                            </div>
                                            <p>Add course</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[35%]">
                                {courseSelected && (
                                    <div className="p-4 mx-5 border border-[#c3c3c3] rounded-md text-[#000]">
                                        <div className="flex justify-start mb-4">
                                            <MdOutlinePlayLesson fontSize={24} className="text-[#3983AC]" />
                                            <p className="text-[17px] font-bold text-[#3B3A3A] ml-4">
                                                {courseSelected.title}
                                            </p>
                                        </div>
                                        <div className="text-[14px] font-semibold text-[#4F4E4E] mb-4">
                                            {courseSelected.content}
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="px-4 py-1 rounded-[50px] bg-[#FCF8BA]">Beginner</div>
                                            <div className="flex items-center">
                                                <p className="text-[18px] font-bold pr-2">{courseSelected.quantity}</p>
                                                <p className="text-[14px] font-semibold">video</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex">
                                                <div className="text-[14px] font-semibold pr-2">
                                                    {courseSelected.price}
                                                </div>
                                                <div className="text-[#8B8B8B] text-[14px] font-semibold">
                                                    / lifetime
                                                </div>
                                            </div>
                                            <button className="bg-black px-4 py-1 font-semibold rounded-[50px] text-white">
                                                Joinclass now
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[50%] flex flex-nowrap rounded-2xl p-2">
                                <div className="w-[50px] flex justify-center items-center ">
                                    <BsSearch color="#909090" fontSize={"15px"} fontWeight={700} />
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Which course do you want to select ?"
                                        className="w-[100%] bg-transparent border-none outline-none"
                                    />
                                </div>
                            </div>
                            <button
                                className="flex items-center text-[16px] text-[#3983AC] bg-[#a8dfff] py-2 px-4 rounded"
                                onClick={() => {
                                    handleNextStep();
                                }}
                            >
                                <p className="font-semibold">Next</p>
                            </button>
                        </div>
                    </div>
                )}
                {stepSelected == 0 && stepCreateCourse == 1 && (
                    <div className="h-full flex justify-between">
                        <form
                            className="w-[55%] flex flex-col justify-between"
                            onSubmit={() => {
                                onSubmitCourseItemForm();
                            }}
                        >
                            <CourseItemForm register={courseRegister} setValue={setValueOfCourse} />
                            <div className="flex justify-between">
                                <div
                                    className="flex items-center text-[16px] text-[#a4a4a4] py-2 px-4 mx-3 border border-[#a4a4a4] rounded hover:cursor-pointer"
                                    onClick={() => {
                                        setStepCreateCourse(0);
                                    }}
                                >
                                    <p className="pl-2 font-semibold">Previous</p>
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center text-[16px] text-[#3983AC] bg-[#a8dfff] py-2 px-4 rounded"
                                >
                                    <p className="font-semibold">Next</p>
                                </button>
                            </div>
                        </form>
                        <div
                            className="w-[45%] flex justify-center items-center relative"
                            style={{
                                backgroundImage: `url(/Images/CreateCourse/background.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="w-[70%]">
                                <div className="flex justify-center items-center">
                                    <BsEyeFill className="mr-3" />
                                    <p className="font-semibold">Course Card preview</p>
                                </div>
                                <PreviewCourse
                                    courseDataInput={{
                                        title: watchValueOfCourse("title"),
                                        themenails: watchValueOfCourse("image") ? (
                                            <Image
                                                width={100}
                                                height={100}
                                                className="rounded-md w-full h-full"
                                                src={`${watchValueOfCourse("image")}`}
                                                alt=""
                                            />
                                        ) : (
                                            <Image
                                                src={require("@/public/Images/CreateCourse/image_not_found.png")}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        ),
                                        price: watchValueOfCourse("price"),
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {stepSelected == 1 && (
                    <div className="flex justify-between h-full">
                        <form
                            className="w-[55%] flex flex-col justify-between"
                            onSubmit={() => {
                                onSubmitLessonItemForm();
                            }}
                        >
                            <LessonFillForm register={lessonRegister} setValue={setValueOfLesson} />
                            <div className="flex justify-between">
                                <button
                                    className="flex items-center text-[16px] text-[#a4a4a4] py-2 px-4 mx-3 border border-[#a4a4a4] rounded"
                                    onClick={() => {
                                        handleBackStep();
                                    }}
                                >
                                    <p className="pl-2 font-semibold">Previous</p>
                                </button>
                                <button
                                    className="flex items-center text-[16px] text-[#3983AC] bg-[#a8dfff] py-2 px-4 rounded"
                                    type="submit"
                                >
                                    <p className="font-semibold">Next</p>
                                </button>
                            </div>
                        </form>
                        <div
                            className="w-[45%] flex justify-center items-center relative"
                            style={{
                                backgroundImage: `url(/Images/CreateCourse/background.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="w-[70%]">
                                <div className="flex justify-center items-center">
                                    <BsEyeFill className="mr-3" />
                                    <p className="font-semibold">Course Card preview</p>
                                </div>
                                <PreviewLesson
                                    lessonDataInput={{
                                        title: watchValueOfLesson("title"),
                                        themenails: watchValueOfLesson("image") ? (
                                            <Image
                                                width={100}
                                                height={100}
                                                className="rounded-md w-full h-full"
                                                src={`${watchValueOfLesson("image")}`}
                                                alt=""
                                            />
                                        ) : (
                                            <Image
                                                src={require("@/public/Images/CreateCourse/image_not_found.png")}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        ),
                                        price: watchValueOfCourse("price"),
                                        author: "Hoangtu",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </SelectCourseLayout>
        </div>
    );
}
