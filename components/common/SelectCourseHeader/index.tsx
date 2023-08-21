import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { GrDocumentStore } from "react-icons/gr";

interface ISelectCourseHeader {
    setModalSelectCourse: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectCourseHeader({ setModalSelectCourse, setIsCloseModal }: ISelectCourseHeader) {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex">
                <div className="bg-[#3983AC] w-1"></div>
                <h1 className="mx-4 text-[16px] font-bold">ADD NEW VIDEO</h1>
            </div>
            <div className="flex">
                <button className="flex items-center text-[16px] text-[#a4a4a4] py-2 px-4 mx-3 border border-[#a4a4a4] rounded">
                    <GrDocumentStore />
                    <p className="pl-2 font-semibold">Storage draft</p>
                </button>
                <button
                    onClick={() => {
                        setIsCloseModal(true);
                    }}
                    className="flex items-center text-[16px] text-[#a4a4a4] py-2 px-4 mx-3 border border-[#a4a4a4] rounded"
                >
                    <AiOutlineClose />
                    <p className="pl-2 font-semibold">Cancel</p>
                </button>
                <button className="flex items-center text-[16px] text-[#3983AC] bg-[#a8dfff] py-2 px-4 mx-3 rounded">
                    <AiOutlineCheck />
                    <p className="pl-2 font-semibold">Save draft</p>
                </button>
            </div>
        </div>
    );
}
