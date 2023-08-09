import Image from "next/image";
import React, {  useRef, Dispatch, SetStateAction } from "react";

import { ContentStyled } from "@/components/common/Share/shareStyled";

import { AiOutlineClose } from "react-icons/ai";
interface IShares {
    currentUserId: string;
    isShare: boolean;
    setShare: Dispatch<SetStateAction<boolean>>;
}

const Share: React.FC<IShares> = ({ isShare }: IShares) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleCopy = () => {
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value)
            .then(() => {
                console.log('Copied successfully');
            })
            .catch((error) => {
                console.error('Copy failed:', error);
            });
        }
    };

    const handleToggleShare = () => {
        isShare = !isShare;
    };

    return (
        <>
            <div
                className={`${isShare ? "flex" : "hidden"} w-full h-full overflow-hidden flex justify-center items-center fixed  top-0 left-0 bg-[#00000090]`}
            >
                <div className="w-[600px] h-[330px] bg-[#ffffffef] rounded-[5px] flex flex-col justify-start items-center">
                    <div className="w-full h-[40px] text-[#656565] flex flex-nowrap justify-between items-center border-[#9d9d9d45] border-b-[1px]">
                        <p className="text-[16px] ml-[20px] font-bold ">Share</p> 
                        <div onClick={handleToggleShare} className="cursor-pointer">
                            <AiOutlineClose fontSize={`20px`} className={`mr-[20px]`} />
                        </div>
                    </div>
                    <ContentStyled className="w-full flex flex-nowrap justify-center items-center">
                        <div className="w-[300px] h-full flex flex-col justify-start items-center">
                            <div className="w-full h-[200px] flex justify-center items-center">
                                <iframe 
                                    className="w-[300px] h-[160px] bg-[#00000090] rounded-[5px]"
                                    src={``}
                                >
                                </iframe>
                            </div>
                            <div className="w-full h-[55px] flex justify-center items-center">
                                <div className="w-[300px] flex flex-col justify-center items-center">
                                    <div className="w-full h-[16px] mb-[0.5rem] flex justify-start items-center">
                                        <p className="text-[13px] text-[#606060] font-semibold">Copy this video code here</p>
                                    </div>
                                    <div className="w-full h-[30px] flex flex-nowrap justify-between items-center">
                                        <input ref={inputRef} type={`text`} className="w-[214px] h-[30px] bg-[#d2d2d2] text-[#A9A9A9] text-[12px] rounded-[2px]" placeholder="r=embed>#haikyuuedits</a" value={`https://kennytruong3118`} disabled />
                                        <button onClick={handleCopy} className="w-[70px] h-[30px] bg-[#7FCFFC] text-[#000000] text-[12px] font-semibold rounded-[2px]">
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[40px] flex justify-center items-center">
                                <div className="w-[300px] h-full flex flex-col justify-center items-center">
                                    <p className="text-[8px] text-[#656565] font-medium">By embedding this video, you confirm that you agree to our Terms of Use and that you have read and understood our Privacy Policy.</p>
                                </div>
                            </div>  
                        </div>
                        <div className="w-[240px] h-full ml-[0.5rem] flex justify-center items-center">
                            <div className="w-[220px] h-[270px] bg-[#ffffff] rounded-[5px] flex flex-col justify-start items-center">
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/logos_facebook.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to Facebook</p>
                                </div>
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/logos_tiktok-icon.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to Tiktok</p>
                                </div>
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/logos_google-gmail.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to Gmail</p>
                                </div>
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/logos_whatsapp-icon.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to WhatsApp</p>
                                </div>
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/skill-icons_twitter.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to Twitter</p>
                                </div>
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/skill-icons_linkedin.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to LinkedIn</p>
                                </div>
                                <div className="w-full h-[30px] flex flex-nowrap justify-start items-center cursor-pointer transition-all duration-200 hover:scale-[1.03]">
                                    <div className="w-[30px] h-[30px] ml-[25px] flex justify-center items-center">
                                        <div className="w-[20px] h-[20px]">
                                            <Image
                                                src={require("@/public/Images/Home/logos_telegram.png")}
                                                style={{ 
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>  
                                    <p className="text-[12px] ml-[0.5rem] text-[#606060] font-semibold">Share to Telegram</p>
                                </div>
                            </div>
                        </div>
                    </ContentStyled>
                </div>
            </div>
        </>
    );
}

export default Share;