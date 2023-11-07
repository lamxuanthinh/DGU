import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { useTranslations } from "next-intl";

interface IUploadImagefile {
    setValue: UseFormSetValue<any>;
    getValues: UseFormGetValues<any>;
}

export default function UploadImageFile({ setValue, getValues }: IUploadImagefile) {
    const t = useTranslations("upload");
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
        const selectedImage = event.target.files?.[0];

        if (selectedImage) {
            setValue && setValue("image", selectedImage); // Ensure the value is a File object

            if (handleFileSelect(selectedImage)) {
                const url = URL.createObjectURL(selectedImage);
                setSrcImageEdit(url);
                setValue && setValue("image_blob", url);
            } else {
                alert("This is not an image file.");
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
            className="h-full relative flex justify-center items-center rounded border-[#F7E7E7] border hover:cursor-pointer"
            onClick={handleButtonClick}
        >
            {srcImageEdit && getValues("image_blob") && (
                <Image
                    width={100}
                    height={100}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    src={getValues("image_blob")}
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
                <p className="font-semibold dark:text-white">{t("fill-form.thumbnail-upload")}</p>
            </div>
        </div>
    );
}
