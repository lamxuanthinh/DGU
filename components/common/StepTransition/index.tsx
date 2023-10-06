import { IoIosArrowForward, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";
import { useAppContext } from "@/Context";

interface IStepTransition {
    stepSelected: number;
    setStepSelected: Dispatch<SetStateAction<number>>;
    titleSteps: string[];
    setStepCreateCourse: Dispatch<SetStateAction<number>>;
    setConfirmEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StepTransition({
    stepSelected,
    setStepSelected,
    titleSteps,
    setStepCreateCourse,
    setConfirmEditModal,
}: IStepTransition) {
    const { courseSelected } = useAppContext();

    const handleStepSelected = (index: number) => {
        setStepSelected(index);
        setStepCreateCourse(0);
    };

    return (
        <div className="flex">
            {titleSteps.map((item, index) => {
                return (
                    <div className="flex items-center text-[#7f7f7f]" key={index}>
                        <button
                            className={`flex items-center py-2 px-4 mx-3 rounded font-semibold ${
                                stepSelected == index
                                    ? "border-2 border-[#6bc9ff] dark:border-primary"
                                    : stepSelected > index
                                    ? "bg-[#d8f1ff] dark:bg-transparent border-solid border-2 border-primary"
                                    : "bg-white dark:bg-[#454545] border-solid border border-[#B4B7B8]/[.3]"
                            }
                        }`}
                            onClick={() => {
                                if (courseSelected && index != 2) {
                                    handleStepSelected(index);
                                } else if (courseSelected && index == 2) {
                                    setConfirmEditModal(true);
                                }
                            }}
                        >
                            {stepSelected > index ? (
                                <BsFillCheckCircleFill className="text-[#6bc9ff] dark:text-primary" />
                            ) : stepSelected == index ? (
                                <IoIosRadioButtonOn className="text-[#6bc9ff] dark:text-primary" />
                            ) : (
                                <IoIosRadioButtonOff  className="dark:text-white"/>
                            )}

                            <p className={`pl-2 font-semibold ${stepSelected >= index ? "text-[#3983AC] dark:text-primary" : "dark:text-white"}`}>
                                {item}
                            </p>
                        </button>
                        <div>
                            <IoIosArrowForward className="dark:text-[#B9B9B9]" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
