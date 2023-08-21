import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
interface IUploadImagefile {
    setValue: UseFormSetValue<any>;
    getValues: UseFormGetValues<any>;
}

export default function UploadImageFile({ setValue, getValues }: IUploadImagefile) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [srcImageEdit, setSrcImageEdit] = useState<string | null>(null);

    const handleFileSelect = (imageFile: File): boolean => {
        const file = imageFile;
        const fileName = file.name;
        const fileExtension: string = fileName.split(".").pop()!.toLocaleLowerCase();
        const allowedExtensions: string[] = ["png", "jpg", "jpeg", "gif"];
        if (allowedExtensions.includes(fileExtension)) {
            return true;
        } else {
            return false;
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files != null) {
            if (handleFileSelect(files[0]) === true) {
                const url = URL.createObjectURL(files[0]);
                setSrcImageEdit(url);
                setValue && setValue("image", url);
            } else {
                alert("This is not image file.");
                event.target.value = "";
            }
        }
    };

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <div
            className="h-full relative flex justify-center items-center rounded border-[#b5b5b5] border-2 hover:cursor-pointer"
            onClick={handleButtonClick}
        >
            {srcImageEdit && (
                <Image
                    width={100}
                    height={100}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    src={getValues("image")}
                    alt="Course Avatar"
                />
            )}
            <div className="flex flex-col text-[#767676] z-10">
                <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={handleInputChange}
                    required
                />
                <div className="flex justify-center">
                    <FaCloudUploadAlt size={30} />
                </div>
                <p className="font-semibold">Upload avatar course</p>
            </div>
        </div>
    );
}
