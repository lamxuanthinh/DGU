import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import UploadImageFile from "../../UploadFile/UploadImageFile";
import { SchemaCourse } from "@/utils/rules";
import { useEffect, useState } from "react";
import React from "react";
import DropDownSelect from "../../DropDownSelect";
import { useTranslation } from "next-i18next";

type FormCourseData = Pick<
    SchemaCourse,
    "title" | "description" | "classify" | "price" | "image" | "image_blob" | "author"
>;

interface ICourseItemForm {
    register: UseFormRegister<FormCourseData>;
    setValue: UseFormSetValue<FormCourseData>;
    getValues: UseFormGetValues<FormCourseData>;
}

export default function CourseItemForm({ register, setValue, getValues }: ICourseItemForm) {
    const { t } = useTranslation("upload");
    const authorRef = React.useRef<HTMLInputElement>(null);
    const [isFreeCourse, setIsFreeCourse] = useState("Free");

    const visibilityOptions = [
        {
            id: 1,
            name: t("create-course.description-and-fee.beginner"),
        },
        {
            id: 2,
            name: t("create-course.description-and-fee.beginner"),
        },
    ];

    const costsOptions = [
        {
            id: 1,
            name: t("create-course.description-and-fee.fee"),
        },
        {
            id: 2,
            name: t("create-course.description-and-fee.free"),
        },
    ];

    useEffect(() => {
        setValue("classify", visibilityOptions[0].name);
        setValue("price", 0);
        setValue("author", authorRef.current?.value || "");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="pt-5 max-h-[89%] rounded overflow-scroll scrollbar-none">
            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">{t("create-course.lesson.title")}</h1>
                    <p className="text-[13px] mr-16 text-[#464646] dark:text-[#CFCFCF]">
                        {t("create-course.lesson.description")}
                    </p>
                </div>
                <div className="col-span-2">
                    <input
                        {...register("title")}
                        className="p-[2px] pl-3 outline-none mb-4 w-full bg-[#7fcffc1c] rounded placeholder-[#888888] border border-solid border-[#F7E7E7] dark:placeholder-white"
                        placeholder={t("create-course.lesson.placeholder-input")}
                        type="text"
                        required
                    />

                    <input
                        ref={authorRef}
                        className="p-[3px] pl-3 col-span-3 w-full text-[#888888] bg-[#7fcffc1c] rounded border border-solid border-[#F7E7E7] dark:text-white"
                        value="Giana Schelea"
                        type="text"
                        disabled
                        required
                    />
                </div>
            </div>

            <hr className="h-0.25 bg-slate-200 my-3" />

            <div className="grid grid-cols-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">{t("create-course.description-and-fee.title")}</h1>
                    <p className="text-[13px] mr-12 text-[#464646] dark:text-[#CFCFCF]">
                        {t("create-course.description-and-fee.description")}
                    </p>
                </div>
                <div className="col-span-2">
                    <textarea
                        {...register("description")}
                        placeholder={t("create-course.description-and-fee.placeholder-input")}
                        className="h-[120px] col-span-3 py-2 px-3 text-[16px] border-[#F7E7E7] bg-[#7fcffc1c] placeholder-[#888888] placeholder-[14px] rounded border w-full outline-none dark:placeholder-white"
                        required
                    />
                    <div className="mb-3">
                        <div className="bg-[#7fcffc1c] mb-4">
                            <DropDownSelect
                                className="py-[6px] border border-solid border-[#F7E7E7] px-[15px] mt-3 rounded"
                                options={visibilityOptions}
                                onSelectOption={(test: string) => {
                                    setValue("classify", test);
                                }}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[48%] border-[#F7E7E7] bg-[#7fcffc1c]">
                                <DropDownSelect
                                    className="py-[6px] border border-solid border-[#F7E7E7] px-[15px] rounded"
                                    options={costsOptions}
                                    onSelectOption={(value: string) => {
                                        setIsFreeCourse(value);
                                    }}
                                />
                            </div>
                            <div
                                className={`flex items-center w-[48%] border-[#F7E7E7] border border-solid rounded bg-[#7fcffc1c] ${
                                    isFreeCourse == "Free"
                                        ? "bg-[#dadada] dark:bg-[#7fcffc1c] opacity-60"
                                        : "bg-[#7fcffc1c]"
                                } p-1`}
                            >
                                <p className="text-[#000000] ml-[15px] dark:text-white">$</p>
                                <input
                                    {...register("price")}
                                    className="pl-3 outline-none w-full bg-transparent placeholder-[#888888] text-[#888888] dark:text-white"
                                    placeholder="0"
                                    type="number"
                                    required
                                    disabled={isFreeCourse == "Free" ? true : false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="h-0.25 bg-slate-200 mb-3 dark:bg-[#888888]" />

            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">{t("create-course.thumbnail.title")}</h1>
                    <p className="text-[13px] mr-12 text-[#464646] dark:text-[#CFCFCF]">
                        {t("create-course.thumbnail.description")}
                    </p>
                </div>
                <div className="col-span-2 h-[140px] bg-[#7fcffc1c]">
                    <UploadImageFile setValue={setValue} getValues={getValues} />
                </div>
            </div>
        </div>
    );
}
