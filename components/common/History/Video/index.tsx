import Image from "next/image";
import Button from "@/components/common/Button";
import { courseData } from "./constants";

function Watched() {
    return (
        <>
            <div className="flex justify-between mb-5">
                <h3 className="text-base font-bold">Today</h3>
                <Button className="text-[#2E8EFF]">Clear Video Watch History</Button>
            </div>
            <div className="">
                {courseData.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <div className="flex items-center">
                            <Image
                                width={200}
                                height={120}
                                className="w-[200px] h-[130px] object-cover rounded-lg mr-[30px]"
                                src={item.image}
                                alt="course image"
                            />
                            <div>
                                <h2 className="font-semibold text-lg mb-3 text-black max-w-[432px]">{item.title}</h2>
                                <p className="text-[#404040] font-medium">{item.description}</p>
                            </div>
                        </div>
                        <div className="text-black px-6">
                            <p className="text-sm font-bold mb-3">{item.time}</p>
                            <button className="text-2xl h-4">...</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Watched;
