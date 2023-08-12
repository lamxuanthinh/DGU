import { IoIosArrowForward, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";

interface IStepTransition {
    stepSelected: number;
    setStepSelected: Dispatch<SetStateAction<number>>;
    titleSteps: string[];
    setStepCreateCourse: Dispatch<SetStateAction<number>>;
}

export default function StepTransition({
    stepSelected,
    setStepSelected,
    titleSteps,
    setStepCreateCourse,
}: IStepTransition) {
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
                                handleStepSelected(index);
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
