import Image from "next/image";

import { BsFillEyeFill } from "react-icons/bs";

import { dataCardDetail } from "@/Views/Profile/constant";

import { DetailCourseItem } from "@/Views/Profile/ProfileStyled";

export default function Details() {
    return (
        <div className="w-full h-full flex   p-[10px] zero:flex-col zero:justify-start  xl:flex-row xl:justify-center  ">
            <div className="h-full xl:w-[33%]  flex justify-center rounded-[5px] mr-2 bg-gradient-to-b from-[#B0997A] via-[rgba(206, 188, 161, 0.7)] to-[rgba(176, 153, 122, 0)]">
                <div className="w-[99%] p-3 rounded-[5px]">
                    <div className="mb-4">
                        <Image
                            className="w-full rounded-[5px] "
                            src={require("@/public/Images/Layout/Profile/main1.png")}
                            alt="main1"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-[26px] mb-4">CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ?</h1>
                        <div className="flex items-center justify-between pb-4">
                            <h4 className="text-[18px] font-bold">Tùng Tâm Lý</h4>
                            <div className="flex items-center">
                                <div className=" w-[35px] h-[26px] bg-[#1a3882] rounded-[2px] flex justify-center items-center text-[#ffffff] text-[18px] font-bold  ">
                                    16
                                </div>
                                <p className="text-[13px] px-2 font-bold">video</p>
                            </div>
                            <div className="text-[24px] font-bold text-[#007621]">FREE</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[13px] pb-1 font-semibold">
                            Trong cuộc sống, chờ đợi có thể là một thử thách khó khăn. Tuy nhiên, nếu ta kiên nhẫn và
                            tin tưởng vào quá trình, kết quả sẽ đến. Hãy làm việc chăm chỉ, tập trung vào mục tiêu và hy
                            vọng vào tương lai tốt đẹp.
                        </p>
                        <div className="font-bold text-[13px] pb-3">
                            #thanhcong, #chodoi, #hoctap, #chodoilieucokipkhong
                        </div>
                        <div className="text-[13px] pb-4 font-semibold">
                            1.008.005 lượt xem • 98.005 lượt đánh giá • 8.005 lượt chia sẻ
                        </div>
                    </div>
                    <div>
                        <div className="w-[50%] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#fff] p-2">
                            <div>
                                <BsFillEyeFill fontSize={20} />
                            </div>
                            <h2 className="px-3 font-semibold">See More All</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl w-[66%]">
                {dataCardDetail.map((item, index) => {
                    return (
                        <DetailCourseItem
                            key={index}
                            className="flex justify-start h-[140px] pb-4">
                            <div className="h-full flex items-center p-3">
                                <p className="font-bold text-[15px]">{item.id}</p>
                            </div>
                            <div className="w-[200px]">{item.image}</div>
                            <div className="flex flex-col px-2 w-[70%]">
                                <h1 className="font-bold text-[18px]">{item.title1}</h1>
                                <p className="font-medium text-[16px]">{item.title2}</p>
                            </div>
                        </DetailCourseItem>
                    );
                })}
            </div>
        </div>
    );
}
