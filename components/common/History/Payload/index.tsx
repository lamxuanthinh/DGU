import Image from "next/image";
import Button from "../../Button";
import avt from "@/public/Images/Profile/Infomation/boy_thoi_trang.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import { dataPayload } from "./constants";
import { IHistory } from "@/model";
import TypeLabel from "../TypeLabel";

function Payload() {
    const [payloadDetail, setPayloadDetail] = useState<IHistory | null>();

    const handleActivePayloadDetail = (payload: IHistory) => {
        setPayloadDetail(payload);
    };

    const handleClosePayloadDetail = () => {
        setPayloadDetail(null);
    };

    return (
        <>
            <div className="mb-5">
                {dataPayload.map((item) => (
                    <React.Fragment key={item.id}>
                        <h3 className="text-base font-bold mb-5">September 10, 2023</h3>
                        <div>
                            {item.children.map((child) => (
                                <div
                                    key={child.id}
                                    onClick={() => {
                                        handleActivePayloadDetail(child);
                                    }}
                                    className="flex justify-between items-center mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                    <div className="flex items-center">
                                        <Image
                                            width={200}
                                            height={120}
                                            className="w-[200px] h-[130px] object-cover rounded-lg mr-[30px]"
                                            src={child.image}
                                            alt="course image"
                                        />
                                        <div>
                                            <h2 className="font-semibold text-lg mb-3 text-black max-w-[432px]">
                                                CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ?
                                            </h2>
                                            <div className="flex items-center">
                                                <Image
                                                    className="w-[36px] h-[36px] bg-gray-300 rounded-[50%]"
                                                    src={avt}
                                                    alt="avt"
                                                />
                                                <span className="font-semibold ml-2 text-[#404040]">TRần Duy Tịnh</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-black px-6 flex">
                                        <div className="mr-[100px]">
                                            <span className="text-[#404040] mb-4 inline-block">$ 912</span>
                                            <TypeLabel type={child.status} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold mb-3">11:50 AM</p>
                                            <Button className="text-2xl h-4">...</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            {payloadDetail && (
                <div className="fixed inset-0 bg-black/[.38] z-1 flex justify-center items-center">
                    <div className="w-[570px] bg-white relative rounded">
                        <Button onClick={handleClosePayloadDetail} className="absolute right-5 top-5 text-2xl">
                            <AiOutlineCloseCircle className="mr-2" />
                        </Button>
                        <div className="pt-[52px] pb-[15px]">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            Name product:
                                        </th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            {payloadDetail.title}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">Owner:</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            {payloadDetail.name}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">Cost:</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            {payloadDetail.price}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            Payment methods:
                                        </th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            {payloadDetail.paymentMethod}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            Trading code:
                                        </th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            {payloadDetail.code}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            Purchase time:
                                        </th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            {payloadDetail.time}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">Status:</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-800">
                                            <TypeLabel type={payloadDetail.status} />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Payload;
