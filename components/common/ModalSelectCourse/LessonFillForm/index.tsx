import { SchemaLesson } from "@/utils/rules";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import UploadImageFile from "../../UploadFile/UploadImageFile";

type FormLessonData = Pick<SchemaLesson, "title" | "description" | "image" | "author">;

interface ILessonFillForm {
    register: UseFormRegister<FormLessonData>;
    setValue: UseFormSetValue<FormLessonData>;
}

export default function LessonFillForm({ register, setValue }: ILessonFillForm) {
    return (
        <div className="px-5 pt-5 pb-2 h-full rounded">
            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">Lesson Title & Description</h1>
                    <p className="text-[13px] mr-12 text-[#464646]">
                        Put an attention-grabbing title and shorten the video's content description.
                    </p>
                </div>
                <div className="col-span-2">
                    <input
                        {...register("title")}
                        className="p-[2px] pl-3 outline-none mb-4 w-full"
                        placeholder="Enter your title"
                        type="text"
                    />
                    <textarea
                        {...register("description")}
                        placeholder="Enter your description ..."
                        className="h-[120px] col-span-3 font-semibold py-2 px-3 text-[16px] border-[#d8d8d8] rounded border-2 w-full"
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
