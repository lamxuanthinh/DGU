import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import UploadImageFile from "../../UploadFile/UploadImageFile";
import { SchemaCourse } from "@/utils/rules";
import Dropdown from "../../Dropdown";
import { useEffect, useState } from "react";
import React from "react";

type FormCourseData = Pick<SchemaCourse, "title" | "description" | "classify" | "price" | "image" | "author">;

interface ICourseItemForm {
    register: UseFormRegister<FormCourseData>;
    setValue: UseFormSetValue<FormCourseData>;
}

export default function CourseItemForm({ register, setValue }: ICourseItemForm) {
    const [visibility, setVisibility] = useState("");
    const authorRef = React.useRef<HTMLInputElement>(null);
    const visibilityOptions = [
        { value: "beginner", label: "Beginner" },
        { value: "beginner2", label: "Beginner2" },
    ];

    useEffect(() => {
        setValue("author", authorRef.current?.value || "");
    }, []);

    return (
        <div className="px-5 pt-5 pb-2 h-full rounded">
            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">Lesson Title & Author</h1>
                    <p className="text-[13px] mr-16 text-[#464646]">
                        Put an attention-grabbing title and shorten the video's content description.
                    </p>
                </div>
                <div className="col-span-2">
                    <input
                        {...register("title")}
                        className="p-[2px] pl-3 outline-none mb-4 w-full"
                        placeholder="Enter your title"
                        type="text"
                        required
                    />
                    <input
                        ref={authorRef}
                        className="p-[3px] pl-3 col-span-3 w-full text-[#888888]"
                        value="Giana Schelea"
                        type="text"
                        disabled
                        required
                    />
                </div>
            </div>

            <hr className="h-0.25 bg-slate-200 m-3" />

            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">Description & Fee</h1>
                    <p className="text-[13px] mr-12 text-[#464646]">
                        Provide a detailed description of the video's content and goals.
                    </p>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-2 mb-3">
                        <div className="col-span-1">
                            <div>
                                <Dropdown
                                    classNameLabel="text-[#9ca3b7] p-[3px]"
                                    options={visibilityOptions}
                                    valueSelected={visibility}
                                    setValueSelected={setVisibility}
                                    setValue={setValue}
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    {...register("price")}
                                    className="p-[3px] pl-3 outline-none w-full"
                                    placeholder="________________"
                                    type="text"
                                    required
                                />
                                <p className="text-[#9ca3b7] w-[36px] h-[36px] p-[8px]">$</p>
                            </div>
                        </div>
                    </div>

                    <textarea
                        {...register("description")}
                        placeholder="Enter your description ..."
                        className="h-[120px] col-span-3 py-2 px-3 text-[16px] border-[#d8d8d8] rounded border-2 w-full"
                        required
                    />
                </div>
            </div>

            <hr className="h-0.25 bg-slate-200 m-3" />

            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">Thumbnail</h1>
                    <p className="text-[13px] mr-12 text-[#464646]">
                        Create a compelling and interesting avatar to attract viewers.
                    </p>
                </div>
                <div className="col-span-2 h-[140px]">
                    <UploadImageFile setValue={setValue} />
                </div>
            </div>
        </div>
    );
}
