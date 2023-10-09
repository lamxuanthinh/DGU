import Button from "@/components/common/Button";
import Image from "next/image";
import { GrNotes } from "react-icons/gr";
import avt from "@/public/Images/Profile/Infomation/cool_green.jpg";
import { useState } from "react";

function Setting() {
    const [avtImageUpload, setAvtImageUpload] = useState<string>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileImage = e.target.files![0];
        if (fileImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(fileImage);
            fileReader.onload = () => {
                setAvtImageUpload(fileReader.result as string);
            };
        }
    };
    return (
        <section className="w-full">
            <h1 className="text-[36px] font-bold mb-4 px-5">Setting</h1>
            <div className="px-5">
                <div className="flex items-center mb-1">
                    <h2 className="text-2xl font-bold mr-2">Account</h2>
                    <GrNotes  className="dark:bg-white"/>
                </div>
                <p className="text-[#ACA1A1] dark:text-[#dadada] mb-4 font-medium">Update your account and information</p>
                <div className="max-w-[780px] flex flex-wrap gap-y-4 mb-4">
                    <div className="w-1/2 px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            First name
                        </label>
                        <input
                            type="text"
                            className="w-full outline-none px-4 rounded dark:bg-transparent h-[42px] border-2 border-solid dark:border-[#ebecf0]/[.2] border-[#EBECF0]"
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="w-full outline-none px-4 rounded dark:bg-transparent h-[42px] border-2 border-solid dark:border-[#ebecf0]/[.2] border-[#EBECF0]"
                        />
                    </div>
                    <div className="w-full px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            Username
                        </label>
                        <div className="flex items-center">
                            <p className="bg-[#F8FAFC] px-[30px] py-[14px] font-semibold text-[#777777] border-2 border-[#EBECF0] dark:border-[#ebecf0]/[.2] border-solid h-[42px] rounded-tl-[4px] rounded-bl-[4px] flex items-center">
                                dgu.com.vn/
                            </p>
                            <input
                                type="text"
                                className="w-full outline-none px-4 rounded dark:bg-transparent rounded-tr-[4px] rounded-br-[4px] h-[42px] border-2 border-solid border-[#EBECF0] dark:border-[#ebecf0]/[.2]"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block mr-8" htmlFor="">
                        Photo
                    </label>
                    <div className="flex items-center">
                        <Image
                            width={50}
                            height={50}
                            src={avtImageUpload || avt}
                            alt="avatar"
                            className="w-10 h-10 rounded mr-8 object-cover"
                        />
                        <input
                            className="hidden"
                            type="file"
                            accept="image/*"
                            onChange={handleInputChange}
                            id="avt-image"
                        />
                        <label
                            htmlFor="avt-image"
                            className="min-w-[130px] py-[6px] border-2 border-solid border-[#EBECF0] dark:border-[#ebecf0]/[.2] rounded text-center"
                        >
                            Change
                        </label>
                        <Button className="min-w-[130px] py-[6px] ">Remove</Button>
                    </div>
                </div>
                <div className="mb-3 max-w-[780px]">
                    <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                        About
                    </label>
                    <textarea className="w-full outline-none h-[75px] border-2 border-solid border-[#EBECF0] dark:border-[#ebecf0]/[.2] dark:bg-transparent rounded px-4 py-3 mb-1 resize-none" />
                    <p className="text-[#9FA0A7] dark:text-[#c6c6c6] text-sm">
                        Brief description for your profile. URLs are hypertextlinked.
                    </p>
                </div>
            </div>
            <div className="w-full h-[2px] bg-[#EBECF0] dark:bg-[#ebecf0]/[.3] mb-6"></div>
            <div className="px-5">
                <div className="flex items-center mb-1">
                    <h2 className="text-2xl font-bold mr-2">Personal Information</h2>
                    <GrNotes className="dark:bg-white"/>
                </div>
                <p className="text-[#ACA1A1] dark:text-[#dadada] mb-4 font-medium">
                    This information will be displayed publicly so be careful what you are.
                </p>
                <div className="max-w-[780px] flex flex-wrap gap-y-4 mb-4">
                    <div className="w-1/2 px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            Email Address
                        </label>
                        <input
                            type="text"
                            className="w-full outline-none px-4 rounded dark:bg-transparent h-[42px] border-2 border-solid dark:border-[#ebecf0]/[.2] border-[#EBECF0]"
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            Phone number
                        </label>
                        <input
                            type="text"
                            className="w-full outline-none px-4 rounded dark:bg-transparent h-[42px] border-2 border-solid dark:border-[#ebecf0]/[.2] border-[#EBECF0]"
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            Country
                        </label>
                        <input
                            type="text"
                            className="w-full outline-none px-4 rounded dark:bg-transparent h-[42px] border-2 border-solid dark:border-[#ebecf0]/[.2] border-[#EBECF0]"
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <label className="mb-2 font-medium text-lg text-[#777] dark:text-[#dadada] block" htmlFor="">
                            Language
                        </label>
                        <input
                            type="text"
                            className="w-full outline-none px-4 rounded dark:bg-transparent h-[42px] border-2 border-solid dark:border-[#ebecf0]/[.2] border-[#EBECF0]"
                        />
                    </div>
                </div>
                <p className="text-[#9FA0A7] dark:text-[#c6c6c6] text-sm">This is account was created on Five 20, 2023 </p>
            </div>
        </section>
    );
}

export default Setting;
