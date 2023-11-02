import { useTranslation } from "next-i18next";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

interface ISelectCourseHeader {
    setIsCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectCourseHeader({ setIsCloseModal }: ISelectCourseHeader) {
    const { t } = useTranslation("upload");

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex">
                <div className="bg-[#3983AC] w-1"></div>
                <h1 className="mx-4 text-[16px] font-bold">{t("select-course.label")}</h1>
            </div>
            <div className="flex">
                <button className="flex items-center text-[16px] text-[#a4a4a4] py-2 px-4 mx-3 border border-[#DEDEDE] rounded dark:text-white dark:border-white">
                    <BiCopy className="text-[#a4a4a4] dark:text-white" />
                    <p className="pl-2 font-semibold">{t("storage-draft")}</p>
                </button>
                <button
                    onClick={() => {
                        setIsCloseModal(true);
                    }}
                    className="flex items-center text-[16px] text-[#a4a4a4] dark:text-white dark:border-white py-2 px-4 mx-3 border border-[#DEDEDE] rounded"
                >
                    <AiOutlineClose />
                    <p className="pl-2 font-semibold">{t("cancel")}</p>
                </button>
                <button className="flex items-center text-[16px] text-[#3983AC] bg-primary/[.36] py-2 px-4 mx-3 rounded dark:text-white dark:bg-[#54ACDD]">
                    <AiOutlineCheck />
                    <p className="pl-2 font-bold">{t("save-draft")}</p>
                </button>
            </div>
        </div>
    );
}
