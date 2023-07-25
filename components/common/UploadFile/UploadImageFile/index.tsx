import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadImageFile() {
    return (
        <div className="h-full flex justify-center items-center rounded border-[#b5b5b5] border-2">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <FaCloudUploadAlt className="" size={30} />
                </div>
                <p className="font-semibold">Upload avatar course</p>
            </div>
        </div>
    );
}
