import { AiOutlineCloseCircle, AiOutlineGlobal } from "react-icons/ai";
import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";
import Image from "next/image";
import React from "react";
import { dataHistorySearch } from "./constants";

function Search() {
    return (
        <>
            <div className="flex justify-between mb-5">
                <div className="flex items-center">
                    <CheckboxInput className="bg-white border-2 border-solid border-black mr-5" />
                    <span className="font-semibold">All</span>
                </div>
                <Button
                    leftIcon={<AiOutlineCloseCircle size={18} />}
                    className="text-[#C8C8C8] border border-solid border-[#C8C8C8] px-4 py-[6px] rounded"
                >
                    Remove
                </Button>
            </div>
            {dataHistorySearch.map((item, index) => (
                <React.Fragment key={index}>
                    <h4 className="font-semibold mb-2">{item.date}</h4>
                    <div className="mb-2">
                        {item.children.map((child, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-5 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <div className="flex items-center">
                                    <CheckboxInput className="bg-white border-2 border-solid border-black mr-9" />
                                    <Image
                                        className="bg-gray-300 w-[60px] h-[60px] rounded-[50%] mr-4"
                                        src={child.avt}
                                        alt="avt"
                                    />
                                    <div>
                                        <h3 className="font-semibold mb-2">
                                            Trường Giang <span className="font-normal">likes</span> Nguyen Hoang Minh
                                            Viet
                                        </h3>
                                        <div className="flex items-center gap-x-3">
                                            <AiOutlineGlobal />
                                            <span>Public</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-black px-6">
                                    <p className="text-sm font-bold mb-3">{child.time}</p>
                                    <Button className="text-2xl h-4">...</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </>
    );
}

export default Search;
