import { useAppContext } from "@/Context";
import { IListDataSplitVideo } from "@/model/editVideo";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "../../Button";
import { AiOutlineCloudUpload } from "react-icons/ai";

const FillFormVideoShort = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { listDataSplitVideo, setListDataSplitVideo, srcVideoEdit, setStepSelected } = useAppContext();
    const [indexActiveSplit, setIndexActiveSplit] = useState(0);
    const handleActiveSplit = (id: number, time: number) => {
        setIndexActiveSplit(id);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    };

    const handleChangeNameShort = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newDataSplit: IListDataSplitVideo = listDataSplitVideo;
        newDataSplit[indexActiveSplit].name = value;
        setListDataSplitVideo([...newDataSplit]);
    };

    const handleChangeDescriptionShort = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        const newDataSplit: IListDataSplitVideo = listDataSplitVideo;
        newDataSplit[indexActiveSplit].description = value;
        setListDataSplitVideo([...newDataSplit]);
    };

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];
        if (selectedImage) {
            const updatedList = listDataSplitVideo;
            updatedList[indexActiveSplit].thumbImageFile = selectedImage;
            const fileReader = new FileReader();
            fileReader.readAsDataURL(selectedImage);
            fileReader.onload = () => {
                updatedList[indexActiveSplit].thumbImage = fileReader.result as string;
                setListDataSplitVideo([...updatedList]);
            };
        }
    };

    const handleOpenFile = (index: number) => {
        setIndexActiveSplit(index);
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleNext = () => {
        setStepSelected(3);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex mb-5 xl:mb-10">
                <div className="w-[55%] shadow-softGlow rounded-[5px] overflow-hidden mr-10 ">
                    <video
                        className="w-full max-h-[50vh] 2xl:max-h-[55vh]"
                        ref={videoRef}
                        src={srcVideoEdit}
                        controls
                    ></video>
                </div>
                <div className="flex-1 mt-5">
                    <div className="mb-8 relative">
                        <label
                            className="block text-sm font-medium absolute bg-white top-[-10px] left-[40px] px-5"
                            htmlFor=""
                        >
                            Title
                        </label>
                        <input
                            required
                            placeholder="Enter the description . . ."
                            onChange={handleChangeNameShort}
                            className="border border-solid border-x-slate-200 outline-none w-full px-3 py-2 text-sm"
                            type="text"
                            value={listDataSplitVideo[indexActiveSplit].name}
                        />
                    </div>
                    <div className="relative">
                        <label
                            className="block text-sm font-medium absolute bg-white top-[-10px] left-[40px] px-5"
                            htmlFor=""
                        >
                            Description
                        </label>
                        <textarea
                            placeholder="Enter the description . . ."
                            onChange={handleChangeDescriptionShort}
                            className="border border-solid border-x-slate-200 outline-none w-full px-3 py-2 text-sm min-h-[200px]"
                            value={listDataSplitVideo[indexActiveSplit].description}
                        />
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col justify-between">
                <div className="overflow-y-scroll no-scrollbar max-h-[150px]">
                    <div className="flex gap-x-[10px] justify-center">
                        {listDataSplitVideo.map((itemSplitVideo, index) => (
                            <div
                                className={`cursor-pointer flex border-[3px] rounded-[5px] overflow-hidden relative ${
                                    index === indexActiveSplit ? "border-solid border-[#7FCFFC]" : ""
                                }`}
                                key={itemSplitVideo.id}
                                onClick={() => handleActiveSplit(index, itemSplitVideo.startTime)}
                            >
                                <Button
                                    onClick={(e: any) => {
                                        e.stopPropagation();
                                        handleOpenFile(index);
                                    }}
                                    className="absolute top-1 right-1 p-1 text-[22px] bg-black/[.39] text-white rounded-[5px]"
                                >
                                    <AiOutlineCloudUpload />
                                </Button>
                                <Image
                                    className="w-[180px] h-[100px]"
                                    src={itemSplitVideo.thumbImage}
                                    width={180}
                                    height={100}
                                    alt="image thumb"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <input className="hidden" ref={inputRef} type="file" onChange={handleChangeImage} />
                <div className="flex justify-between mt-4">
                    <Button className="text-[#777777] border border-solid border-[#949494] text-sm font-bold p-2 min-w-[98px]">
                        Previous
                    </Button>
                    <Button
                        className="text-[#3983AC] bg-[#7FCFFC]/[.35] text-sm font-bold p-2 min-w-[98px]"
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FillFormVideoShort;
