import Button from "@/components/common/Button";
import { useTranslation } from "next-i18next";

interface IModalVideoProps {
    title: string;
    onOk: () => void;
    onCancel: () => void;
}

export default function Modal({ title, onOk, onCancel }: IModalVideoProps) {
    const { t } = useTranslation("common");

    return (
        <div className="fixed inset-0 flex items-center justify-center transition-opacity z-[30] bg-modal-gradient backdrop-blur-sm font-semibold select-none">
            <div className="">
                <p className="text-3xl text-[#DBDBDB]  mb-14 text-center">{title}</p>
                <div className="flex justify-center text-[26px] text-black ">
                    <Button className="rounded-[16px] mr-20 min-w-[200px] py-5 text-[26px] bg-white" onClick={onOk}>
                        {t("continue")}
                    </Button>
                    <Button className="rounded-[16px] mr-20 min-w-[200px] py-5 text-[26px] bg-white" onClick={onCancel}>
                        {t("cancel")}
                    </Button>
                </div>
            </div>
        </div>
    );
}
