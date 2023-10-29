import Image from "next/image";
import { BiCommentDetail } from "react-icons/bi";
import TextEllipsis from "../../TextEllipsis";
interface IPreviewCourse {
    courseDataInput: {
        title: string;
        themenails: JSX.Element;
        price: number | string;
    };
}

export default function PreviewCourse({ courseDataInput }: IPreviewCourse) {
    return (
        <div className="w-full bg-white h-[340px] flex flex-col rounded-[10px] mx-[5px] my-[10px] overflow-hidden hover:cursor-pointer shadow-cardUploadVideo">
            <div className="w-full h-[180px] flex justify-center items-center relative">
                {courseDataInput.themenails}
                <div className="w-full bottom-0 left-0 absolute">
                    <div className="flex flex-wrap  m-[0.5rem] text-[10px] font-bold">
                        <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex justify-start items-center h-[25px] rounded-[20px] ">
                            <p className="p-2 ">0 Lesson</p>
                        </div>
                        <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex justify-start items-center h-[25px] rounded-[20px] ">
                            <p className="p-2 ">0m</p>
                        </div>
                        <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex flex-wrap justify-evenly items-center w-[100px] h-[25px] rounded-[20px] ">
                            <BiCommentDetail fontSize={"10px"} style={{ marginTop: "0.1rem" }} />
                            <p>0 comments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[160px] flex justify-center items-center">
                <div className="w-[calc(100%-3rem)] h-[calc(100%-10px)] flex flex-col justify-evenly items-center ">
                    <TextEllipsis
                        content={courseDataInput.title}
                        className="max-h-[48px] text-[16px] font-bold"
                        isSeeMore
                        characterLength={150}
                    />

                    <div className="w-full h-[25px] flex flex-wrap justify-start ">
                        <div className="bg-[#fcf8bae6] flex justify-start items-center h-[25px] rounded-[20px] ">
                            <p className="text-[10px] font-bold p-2 ">Beginner</p>
                        </div>

                        <div className="flex flex-wrap justify-start items-center h-[25px] ml-[1rem] ">
                            <Image
                                src={require("@/public/Images/CreateCourse/user_not_found.png")}
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                                alt="avt"
                            />
                            <Image
                                src={require("@/public/Images/CreateCourse/user_not_found.png")}
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    marginLeft: "-10px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                                alt="avt"
                            />
                            <Image
                                src={require("@/public/Images/CreateCourse/user_not_found.png")}
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    marginLeft: "-10px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                                alt="avt"
                            />

                            <div className=" ml-[-10px] flex justify-center items-center h-[25px] w-[25px] bg-[#7D7979] text-[8px] text-[#ffffff]   rounded-[50%]  ">
                                0k+
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[25px]  flex flex-wrap justify-evenly items-center ">
                        <div className="flex flex-wrap justify-evenly items-center font-semibold">
                            <p className="text-[12px] text-[#000000]">${courseDataInput.price}</p>
                            <p className="text-[10px] text-[#8B8B8B]">/ lifetime</p>
                        </div>
                        <div className="bg-[#000000] flex justify-start items-center h-[25px] rounded-[20px] ">
                            <p className="text-[10px] text-[#ffffff] font-bold p-2 ">Joinclass now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
