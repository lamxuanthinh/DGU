import { AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai";

interface ITypeLabelProps {
    type: string;
}
function TypeLabel({ type }: ITypeLabelProps) {
    return (
        <>
            {type === "Processing" && (
                <div className="w-[140px] bg-[#9EFF00]/[.16] text-[#AFB300] rounded px-3 py-1 flex items-center">
                    <AiOutlineCheck className="mr-2" />
                    {type}
                </div>
            )}
            {type === "Successful" && (
                <div className="w-[140px] bg-[#24FF00]/[.16] text-[#00A92F] rounded px-3 py-1 flex items-center">
                    <AiOutlineCheck className="mr-2" />
                    {type}
                </div>
            )}
            {type === "Unsuccessful" && (
                <div className="w-[140px] bg-[#FF0000]/[.16] text-[#DF0000] rounded px-3 py-1 flex items-center">
                    <AiOutlineCloseCircle className="mr-2" />
                    {type}
                </div>
            )}
        </>
    );
}

export default TypeLabel;
