import Image from "next/image";
import React, {  useRef, useState, } from "react";

import { ContentStyled } from "@/components/common/ArtificiaIntelligence/artificialIntelligenceStyled";

import { AiOutlineClose } from "react-icons/ai";
import { IoSend, IoSparkles } from "react-icons/io5";

import { askAI } from "@/apis/askAI";

const ArtificialIntelligence: React.FC<{isAI: boolean}> = ({ isAI }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isAii, setAi] = useState(isAI);

    const handleClosePopup = () => {
        setAi(!isAii);
    }

    const handleAskAI = () => {
        
        if (inputRef.current) {
            const inputValue = inputRef.current.value;
            console.log("hello");
            console.log(inputValue);

            handleResponeAskAI(inputValue);
        }
    }

    async function handleResponeAskAI(text: string) {
        try {
            const dataResponse = await askAI.getResponseAI(text);
            console.log(dataResponse);        
        } catch (err) {
            console.log(err);
        }
    }

    

    return (
        <>
            <div
                className={`${isAii ? "flex" : "hidden"} w-full h-full overflow-hidden flex justify-center items-center fixed  top-0 left-0 bg-[#00000090]`}
            >
                <div className="w-[800px] h-[600px] bg-[#ffffffef] rounded-[5px] flex flex-col justify-start items-center">
                    <div className="w-full h-[40px] text-[#656565] flex flex-nowrap justify-between items-center border-[#9d9d9d45] border-b-[1px]">
                        <div className="flex flex-nowrap justify-center items-center">
                            <svg width="1em" height="1em">
                                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop stopColor="#0601FF" offset="0%" />
                                    <stop stopColor="#04FFFF" offset="100%" />
                                </linearGradient>
                            </svg>
                            <IoSparkles fontSize={`20px`} className={`mr-[20px] ml-[20px]`}  style={{ fill: "url(#blue-gradient)"}}/>
                            <p className="text-[16px] font-bold ">Ask DGU AI</p> 
                        </div>
                        <div className="cursor-pointer" onClick={handleClosePopup}>
                            <AiOutlineClose fontSize={`20px`} className={`mr-[20px]`} />
                        </div>
                    </div>
                    <ContentStyled className="w-full flex flex-nowrap justify-center items-center bg-[#ffffff]">
                        <div className="w-full h-full flex justify-center items-center">
                            <div></div> 
                            {/* This is divide to two components */}
                            <div className="w-full h-full flex flex-col justify-start items-center">
                                <div className="w-[560px] h-[130px] flex justify-center items-center">
                                    <div className="w-[540px] h-[110px] bg-[#0000000e] flex flex-nowrap justify-start items-center">
                                        <div className="w-[140px] h-full flex flex-nowrap justify-center items-center">
                                            <div className="w-[80px] h-[80px] bg-[#ffffff] rounded-[5px] flex justify-center items-center">
                                                <Image
                                                    src={require("@/public/Images/logo.png")}
                                                    style={{ 
                                                        width: "45px",
                                                        height: "45px",
                                                        objectFit: "contain",
                                                    }}
                                                    alt="logo"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[70px] flex flex-col justify-between items-start">
                                            <div className="flex flex-nowrap justify-start items-center">
                                                <span className={`text-[12px] text-[#656565] font-bold mr-[0.5rem]`}>Name:</span>
                                                <p className={`text-[12px] text-[#000000] font-bold`}>DGU AI {process.env.OPEN_API_KEY}</p>
                                            </div>
                                            <div className="flex flex-nowrap justify-start items-center">
                                                <span className={`text-[12px] text-[#656565] font-bold mr-[0.5rem]`}>Subject:</span>
                                                <p className={`text-[12px] text-[#000000] font-bold`}>All the answers for your questions.</p>
                                            </div>
                                            <div className="flex flex-nowrap justify-start items-center">
                                                <span className={`text-[12px] text-[#656565] font-bold mr-[0.5rem]`}>Version:</span>
                                                <p className={`text-[12px] text-[#000000] font-bold`}>1.0</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentStyled>
                    <div className="w-[800px] h-[80px] bg-[#ffffff00] rounded-b-[5px] flex justify-center items-center border-[#8a8a8a51] border-t-[1px]">
                        <div className="w-[500px] h-[40px] bg-[#E3E3E3] rounded-[5px] flex justify-between items-center">
                            <div className="w-[460px] h-full flex justify-center items-center">
                                <input ref={inputRef} className="w-[440px] bg-[#ffffff00] text-[#000000] outline-none" placeholder="Start searching ..." />
                            </div>

                            <div className="w-[40px] h-[40px] flex justify-center items-center">
                                <div onClick={handleAskAI} className="w-[30px] h-[30px] bg-[#7FCFFC] rounded-[5px] flex justify-center items-center">
                                    <IoSend fontSize={`16px`} className={`text-[#0937D9]`} />
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArtificialIntelligence;