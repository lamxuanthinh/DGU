import UploadImageFile from "../../UploadFile/UploadImageFile";
import Dropdown from "../../Dropdown";
import { useState } from "react";
import { MdPublic } from "react-icons/md";

export default function CourseDetailsForm() {
    const [visibility, setVisibility] = useState("public");

    const visibilityOptions = [
        { value: "public", label: "Public" },
        { value: "private", label: "Private" },
    ];

    return (
        <form className="px-3 h-full">
            <div className="h-[30vh] mb-3">
                <UploadImageFile />
            </div>
            <div className="flex justify-between h-[7vh] mb-3">
                <div className="w-[33%] font-semibold text-[16px] border-[#b5b5b5] rounded border-2">
                    <Dropdown
                        options={visibilityOptions}
                        Icon={MdPublic}
                        valueSelected={visibility}
                        setValueSelected={setVisibility}
                    />
                </div>
                <input
                    placeholder="Title course"
                    type="text"
                    className="w-[65%] font-semibold px-4 text-[16px] border-[#b5b5b5] rounded border-2"
                />
            </div>

            <div className="flex justify-between h-[20vh]">
                <textarea
                    placeholder="Description course"
                    className="font-semibold p-4 text-[16px] border-[#b5b5b5] rounded border-2 w-full"
                />
            </div>
        </form>
    );
}
