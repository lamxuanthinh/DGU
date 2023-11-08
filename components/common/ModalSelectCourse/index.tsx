import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CourseItemForm from "@/components/common/ModalSelectCourse/CourseItemForm";
import SelectCourseLayout from "@/components/layout/SelectCourseLayout";
import { SchemaCourse } from "@/utils/rules";
import { MdOutlineAddchart } from "react-icons/md";
import { BsEyeFill, BsSearch } from "react-icons/bs";
import { useAppContext } from "@/Context";
import courseApi from "@/apis/course";
import FillFormVideoShort from "./FillFormVideoShort";
import Release from "./Release";
import TypeVideo from "./TypeVideo";
import LessonFillForm from "./LessonFillForm";
import { ItemCardCourse } from "@/components";
import { useSession } from "next-auth/react";
import { configAuth } from "@/apis/configAuth";
import ImageCustom from "../ImageCustom";
import Button from "../Button";

interface IModalSelectCourse {
    setRenderSelectCourse: React.Dispatch<React.SetStateAction<boolean>>;
    setConfirmEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormCourseData = Pick<
    SchemaCourse,
    "title" | "description" | "classify" | "price" | "image" | "image_blob" | "author"
>;
type FormLessonData = Pick<SchemaCourse, "title" | "description" | "image" | "image_blob" | "author">;

export default function ModalSelectCourse({
    setConfirmEditModal,
    setRenderSelectCourse,
    setIsCloseModal,
}: IModalSelectCourse) {
    const {
        courseSelected,
        setCourseSelected,
        myCourseData,
        setMyCourseData,
        setLessonCreated,
        stepSelected,
        setStepSelected,
    } = useAppContext();

    const [isLoading, setIsLoading] = useState(false);
    const [stepCreateCourse, setStepCreateCourse] = useState(0);
    const { data: session } = useSession();
    const titleSteps: string[] = ["Choose course", "Fill form", "Edit", "Fill form video short", "Release"];

    const {
        register: courseRegister,
        handleSubmit: handleCourseSubmit,
        setValue: setValueOfCourse,
        getValues: getValueOfCourse,
        watch: watchValueOfCourse,
        reset: resetCourseData,
    } = useForm<FormCourseData>({});

    const {
        register: lessonRegister,
        handleSubmit: handleLessonSubmit,
        setValue: setValueOfLesson,
        getValues: getValueOfLesson,
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
        const { userId } = session?.user || {};

        if (session) {
            setIsLoading(true);
            await courseApi.createCourse(
                {
                    title: data.title,
                    author: data.author,
                    description: data.description,
                    price: data.price,
                    level: data.classify,
                    status: "0001",
                    thumbnail: data.image,
                },
                configAuth(session),
            );
        }

        if (userId) {
            const { metaData } = (await courseApi.getCourseById(userId)) || {};
            setMyCourseData(metaData.courseList);
        }

        setStepCreateCourse(0);
        setIsLoading(false);

        resetCourseData({
            author: "",
            classify: "",
            description: "",
            image: "",
            price: 0,
            title: "",
        });
    });

    const onSubmitLessonItemForm = handleLessonSubmit(async (data) => {
        setLessonCreated(data);
        resetLessonData({
            description: "",
            image: "",
            title: "",
        });
        setConfirmEditModal(true);
    });

    useEffect(() => {
        const fetchMyCourseApi = async () => {
            const { userId } = session?.user || {};
            const { metaData } = (userId && (await courseApi.getCourseById(userId))) || {};

            if (metaData) {
                const { courseList } = metaData;
                setMyCourseData(courseList);
                if (!courseSelected) {
                    metaData && setCourseSelected(courseList[0]);
                }
            }
        };

        fetchMyCourseApi();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#00000085] dark:bg-[#7A7A7A]/[.5]">
            <SelectCourseLayout
                setIsCloseModal={setIsCloseModal}
                setConfirmEditModal={setConfirmEditModal}
                setModalSelectCourse={setRenderSelectCourse}
                stepSelected={stepSelected}
                setStepSelected={setStepSelected}
                setStepCreateCourse={setStepCreateCourse}
                titleSteps={titleSteps}
            >
                {stepSelected == 0 && stepCreateCourse == 0 && (
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex h-[90%] pt-5">
                            <div className="w-[65%]">
                                <div className="grid grid-cols-3 gap-2 overflow-y-auto scrollbar-none max-h-[450px]">
                                    {myCourseData &&
                                        courseSelected &&
                                        myCourseData.map((item: any, index: number) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        setCourseSelected(item);
                                                    }}
                                                    className={`h-[140px] p-1 rounded-md hover:cursor-pointer ${
                                                        item._id == courseSelected._id &&
                                                        "border-[3px] border-[#7FCFFC] transition-all duration-200"
                                                    }`}
                                                >
                                                    <ImageCustom
                                                        alt=""
                                                        className="w-full h-full"
                                                        src={`${item.thumbnail}`}
                                                    />
                                                </div>
                                            );
                                        })}

                                    <div
                                        className={`h-[140px] flex items-center justify-center p-1 rounded-md text-[#3983AC] bg-[#f4fbff] hover:cursor-pointer hover:border-[3px] hover:border-[#7FCFFC] transition-all duration-200 dark:bg-primary/[.1]`}
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
                                    <ItemCardCourse className="max-w-[370px] mx-auto" dataCard={courseSelected} />
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[50%] flex flex-nowrap rounded-2xl p-2">
                                <div className="w-[50px] flex justify-center items-center ">
                                    <BsSearch
                                        className="text-[#909090] dark:text-white"
                                        fontSize={"15px"}
                                        fontWeight={700}
                                    />
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Which course do you want to select ?"
                                        className="w-[100%] bg-transparent border-none outline-none dark:placeholder-white"
                                    />
                                </div>
                            </div>
                            <button
                                className={`flex items-center text-[16px] justify-center min-w-[100px] ${
                                    courseSelected
                                        ? "text-[#3983AC] bg-[#7FCFFC]/[.3] hover:cursor-pointer dark:bg-[#54ACDD] dark:text-white"
                                        : "text-[#959595] bg-[#dddddd] hover:cursor-none"
                                } py-2 px-4 rounded-sm`}
                                onClick={() => {
                                    courseSelected && handleNextStep();
                                }}
                            >
                                <p className="font-bold">Select</p>
                            </button>
                        </div>
                    </div>
                )}
                {stepSelected == 0 && stepCreateCourse == 1 && (
                    <div className="h-full flex justify-between">
                        <form
                            className="w-[58%] flex flex-col justify-between px-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmitCourseItemForm();
                            }}
                        >
                            <CourseItemForm
                                register={courseRegister}
                                setValue={setValueOfCourse}
                                getValues={getValueOfCourse}
                            />
                            <div className="flex justify-between">
                                <div
                                    className="flex items-center text-[16px] text-[#949494] py-2 px-4 border border-[#949494] rounded-sm hover:cursor-pointer dark:text-white"
                                    onClick={() => {
                                        setStepCreateCourse(0);
                                    }}
                                >
                                    <p className="pl-2 font-bold">Previous</p>
                                </div>
                                <Button
                                    isLoading={isLoading}
                                    type="submit"
                                    className="flex items-center text-[16px] text-[#3983AC] bg-[#a8dfff] py-2 px-4 rounded-sm min-w-[100px] justify-center dark:text-white dark:bg-primary"
                                >
                                    <p className="font-bold">Next</p>
                                </Button>
                            </div>
                        </form>
                        <div className="w-[40%] flex justify-center items-center relative bg-upload-video">
                            <div className="w-[80%]">
                                <div className="flex justify-center items-center mb-4">
                                    <BsEyeFill className="mr-3" />
                                    <p className="font-semibold">Course Card preview</p>
                                </div>
                                <ItemCardCourse
                                    className="max-w-[370px] mx-auto"
                                    dataCard={{
                                        thumbnail: watchValueOfCourse("image_blob"),
                                        author: "Hoangtu",
                                        price: watchValueOfCourse("price"),
                                        title: watchValueOfCourse("title"),
                                        level: watchValueOfCourse("classify"),
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
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmitLessonItemForm();
                            }}
                        >
                            <LessonFillForm
                                register={lessonRegister}
                                setValue={setValueOfLesson}
                                getValues={getValueOfLesson}
                            />
                            <div className="flex justify-between mr-[35px]">
                                <button
                                    className="flex items-center text-[16px] text-[#a4a4a4] py-2 px-4 mx-3 border border-[#949494] rounded-sm justify-center min-w-[100px] dark:border-white"
                                    onClick={handleBackStep}
                                >
                                    <p className="font-bold text-[#777] dark:text-white">Previous</p>
                                </button>
                                <button
                                    className="flex items-center text-[16px] text-[#3983AC] bg-[#7FCFFC]/[.3] py-2 px-4 rounded-sm justify-center min-w-[100px] dark:bg-primary dark:text-white"
                                    type="submit"
                                >
                                    <p className="font-bold">Next</p>
                                </button>
                            </div>
                        </form>
                        <div className="w-[45%] flex justify-center items-center relative bg-upload-video rounded">
                            <div className="w-[70%]">
                                <div className="flex justify-center items-center mb-4">
                                    <BsEyeFill className="mr-3" />
                                    <p className="font-semibold">Course Card preview</p>
                                </div>
                                <ItemCardCourse
                                    className="max-w-[370px] mx-auto"
                                    dataCard={{
                                        thumbnail: watchValueOfLesson("image_blob"),
                                        author: "Hoangtu",
                                        price: courseSelected.price,
                                        title: watchValueOfLesson("title"),
                                        level: courseSelected.level,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {stepSelected == 2 && <FillFormVideoShort />}
                {stepSelected == 3 && <TypeVideo />}
                {stepSelected == 4 && <Release />}
            </SelectCourseLayout>
        </div>
    );
}
