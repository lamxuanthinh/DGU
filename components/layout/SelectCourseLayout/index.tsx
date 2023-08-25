import SelectCourseHeader from "@/components/common/SelectCourseHeader";
import StepTransition from "@/components/common/StepTransition";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface ISelectCourseLayoutProps {
    children: ReactNode;
    stepSelected: number;
    setModalSelectCourse: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
    setConfirmEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setStepSelected: Dispatch<SetStateAction<number>>;
    titleSteps: string[];
    setStepCreateCourse: Dispatch<SetStateAction<number>>;
}

export default function SelectCourseLayout({
    children,
    stepSelected,
    setStepSelected,
    setConfirmEditModal,
    titleSteps,
    setStepCreateCourse,
    setIsCloseModal,
}: ISelectCourseLayoutProps) {
    return (
        <div className="w-[80%] h-[98%] bg-white px-4 pt-2 pb-6">
            <header className="h-[10%] ml-[3%] mr-[2%] flex items-center">
                <SelectCourseHeader setIsCloseModal={setIsCloseModal} />
            </header>
            <div className="h-[90%]">
                <div className="ml-[2%] h-[10%] flex items-center">
                    <StepTransition
                        setConfirmEditModal={setConfirmEditModal}
                        stepSelected={stepSelected}
                        setStepSelected={setStepSelected}
                        titleSteps={titleSteps}
                        setStepCreateCourse={setStepCreateCourse}
                    />
                </div>
                <div className="mx-[3%] h-[90%]">{children}</div>
            </div>
        </div>
    );
}
