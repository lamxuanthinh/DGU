import { SchemaLesson } from "@/utils/rules";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useTranslations } from "next-intl";
import UploadImageFile from "@/components/common/UploadFile/UploadImageFile";

type FormLessonData = Pick<SchemaLesson, "title" | "description" | "image" | "author" | "image_blob">;

interface ILessonFillForm {
    register: UseFormRegister<FormLessonData>;
    setValue: UseFormSetValue<FormLessonData>;
    getValues: UseFormGetValues<FormLessonData>;
}

export default function LessonFillForm({ register, setValue, getValues }: ILessonFillForm) {
    const t = useTranslations("upload");
    return (
        <div className="pl-5 pr-[35px] pt-5 pb-2 h-full rounded">
            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">{t("fill-form.lesson")}</h1>
                    <p className="text-[13px] mr-12 text-[#464646] dark:text-[#CFCFCF]">
                        {t("fill-form.lesson-description")}
                    </p>
                </div>
                <div className="col-span-2">
                    <input
                        {...register("title")}
                        className="py-2 px-4 pl-3 outline-none mb-4 w-full border border-solid border-[#F7E7E7] rounded dark:bg-[#7FCFFC]/[.07] dark:placeholder-white"
                        placeholder={t("fill-form.lesson-placeholder-input")}
                        type="text"
                        required
                    />
                    <textarea
                        {...register("description")}
                        placeholder={t("fill-form.lesson-placeholder-text-area")}
                        className="h-[120px] col-span-3 py-2 px-3 text-[16px] border border-solid border-[#F7E7E7] rounded w-full outline-none dark:bg-[#7FCFFC]/[.07] dark:placeholder-white"
                        required
                    />
                </div>
            </div>

            <hr className="h-0.25 bg-slate-200 my-3" />

            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-2 font-semibold">
                    <h1 className="text-[20px]">{t("fill-form.thumbnail")}</h1>
                    <p className="text-[13px] mr-12 text-[#464646] dark:text-[#CFCFCF]">
                        {t("fill-form.thumbnail-description")}
                    </p>
                </div>
                <div className="col-span-2 h-[140px] dark:bg-[#7FCFFC]/[.07]">
                    <UploadImageFile setValue={setValue} getValues={getValues} />
                </div>
            </div>
        </div>
    );
}
