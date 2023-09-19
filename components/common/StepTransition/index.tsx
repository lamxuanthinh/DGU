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
                            className={`flex items-center py-2 px-4 mx-3 rounded ${
                                stepSelected == index
                                    ? "border-2 border-[#6bc9ff]"
                                    : stepSelected > index
                                    ? "bg-[#d8f1ff]"
                                    : "bg-white"
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
                                <BsFillCheckCircleFill className="text-[#6bc9ff]" />
                            ) : stepSelected == index ? (
                                <IoIosRadioButtonOn className="text-[#6bc9ff]" />
                            ) : (
                                <IoIosRadioButtonOff />
                            )}

                            <p className={`pl-2 font-semibold ${stepSelected >= index ? "text-[#3983AC]" : ""}`}>
                                {item}
                            </p>
                        </button>
                        <div>
                            <IoIosArrowForward />{" "}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
