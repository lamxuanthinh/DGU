import React, { Dispatch, SetStateAction, memo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrUndo, GrRedo } from "react-icons/gr";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";

interface INavbarProps {
    onUndo: () => void;
    onRedu: () => void;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    isUndo: boolean;
    isRedo: boolean;
}

function Navbar({ onUndo, onRedu, setIsModal, isUndo, isRedo }: INavbarProps) {
    const t = useTranslations("editvideo");

    const handleNextEdit = () => {
        setIsModal(true);
    };

    const handleUndo = () => {
        onUndo();
    };

    const handelRedo = () => {
        onRedu();
    };

    return (
        <div className="h-[54px] px-[15px] py-[10px] font-semibold  text-white rounded-[5px] bg-[#121212] mb-[5px]">
            <nav className="flex items-center justify-between h-full">
                <div className="flex">
                    <Button
                        href="/upload"
                        className="w-[150px] p-1"
                        type="text"
                        leftIcon={<IoIosArrowBack className="text-2xl" />}
                    >
                        {t("back")}
                    </Button>
                    <div className="text-2xl flex items-center">
                        <Button className="mr-1 !min-w-[32px] !p-1" type="text" disabled={!isUndo} onClick={handleUndo}>
                            <GrUndo />
                        </Button>
                        <Button className="mr-1 !min-w-[32px] !p-1" type="text" disabled={!isRedo} onClick={handelRedo}>
                            <GrRedo />
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <Button
                            className="py-1 w-[150px]"
                            type="text"
                            rightIcon={<IoIosArrowForward className="text-2xl" />}
                            onClick={handleNextEdit}
                        >
                            {t("next")}
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default memo(Navbar);
