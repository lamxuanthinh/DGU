import { SchemaLesson } from "@/utils/rules";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import UploadImageFile from "../../UploadFile/UploadImageFile";

type FormLessonData = Pick<SchemaLesson, "title" | "description" | "image" | "author" | "image_blob">;

interface ILessonFillForm {
    register: UseFormRegister<FormLessonData>;
    setValue: UseFormSetValue<FormLessonData>;
    getValues: UseFormGetValues<FormLessonData>;
}

export default function LessonFillForm({ register, setValue, getValues }: ILessonFillForm) {
    return (
        <div className="pl-5 pr-[35px] pt-5 pb-2 h-full rounded">
            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">Lesson Title & Description</h1>
                    <p className="text-[13px] mr-12 text-[#464646]">
                        Put an attention-grabbing title and shorten the video&apos;s content description.
                    </p>
                </div>
                <div className="col-span-2">
                    <input
                        {...register("title")}
                        className="py-2 px-4 pl-3 outline-none mb-4 w-full border border-solid border-[#F7E7E7] rounded"
                        placeholder="Enter your title"
                        type="text"
                        required
                    />
                    <textarea
                        {...register("description")}
                        placeholder="Enter your description ..."
                        className="h-[120px] col-span-3 py-2 px-3 text-[16px] border border-solid border-[#F7E7E7] rounded w-full outline-none"
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
                    <UploadImageFile setValue={setValue} getValues={getValues} />
                </div>
            </div>
        </div>
    );
}
