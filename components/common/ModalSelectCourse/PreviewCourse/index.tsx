import Image from "next/image";

export default function PreviewCourse() {
    return (
        <div className="px-8 pt-4">
            <div className="">
                <Image
                    className="rounded-xl w-full"
                    src={require("@/public/Images/CreateCourse/createCourse1.png")}
                    alt=""
                />
            </div>
            <div className="p-4">
                <div className="mb-6">
                    <h1 className="font-bold text-[20px] mb-3">Daily Update - Month 4</h1>
                    <p className="font-semibold text-[16px]">
                        Eliminate distractions, set goals, prioritize tasks, practice mindfulness, and create a
                        conducive environment for optimal focus.
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            width={40}
                            src={require("@/public/Images/Profile/Infomation/boy_thoi_trang.png")}
                            alt=""
                        />
                        <h2 className="mx-2 font-bold">GiangSchela</h2>
                    </div>
                    <div>12 June, 2023</div>
                </div>
            </div>
        </div>
    );
}
