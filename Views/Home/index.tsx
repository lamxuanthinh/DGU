import Image from "next/image";
import { useState } from "react";

import {
  FaExternalLinkAlt,
  FaSwatchbook,
  FaCommentAlt,
  FaShare,
} from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { AiTwotoneHeart } from "react-icons/ai";
import { HiSparkles } from "react-icons/hi";
import ModalVideo from "@/components/common/ModalVideo";
import VideoStatusUsingAPI from "@/components/common/StatusVideo";

export default function Home({ data }: any) {
  const [openModalVideo, setOpenModalVideo] = useState(false);

  const [dataVideo, setDataVideo] = useState(data.metaData);

  const VideoSection = ({ data }: any) => {
    const [heart, setHeart] = useState(false);
    const [comment, setComment] = useState(false);
    const [share, setShare] = useState(false);

    return (
      <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff]">
        <div className="mb-4 relative h-full">
          <VideoStatusUsingAPI data={data} />
          <div className="w-[413px] h-[194px] absolute left-[4%] top-[70%]">
            <div className="flex items-center">
              <FaSwatchbook fontSize={"15px"} />
              <h2 className="px-2 text-[24px] font-bold">{data.title}</h2>
            </div>
            <div>
              <p className="text-[14px] font-medium pb-2">{data.caption}</p>
            </div>
            <div className="flex items-center pb-2">
              <p className="text-[15px] font-semibold pr-2">
                Chi tiết khóa học:
              </p>
              <div className="flex items-center">
                <FaExternalLinkAlt fontSize={"12px"} />
                <p className="px-2 text-[15px] font-semibold">{data.title}</p>
              </div>
            </div>
            <div className="flex">
              {data.hashtags.map((item: any, index: any) => {
                return (
                  <p key={index} className="font-bold text-[15px]">
                    #{item.name}
                    {`${data.hashtags.length - 1 == index ? "." : ","}`}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="absolute top-[25%] right-6 flex flex-col">
            <div className="mb-5 flex justify-center relative">
              <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex justify-center bg-[#b7b7b7]">
                <Image
                  width={40}
                  height={40}
                  alt=""
                  src={`${data.author.pathAvatar}`}
                />
              </div>
              <div>
                <TiPlus
                  fontSize={20}
                  className="absolute top-[-5px] right-[-7px]"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex justify-center">
                <AiTwotoneHeart
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setHeart(!heart);
                  }}
                  fontSize={"30px"}
                  fill={heart ? "rgb(254 44 85)" : "white"}
                />
              </div>
              <p className="text-center">100K</p>
            </div>
            <div className="mb-5">
              <div className="flex justify-center">
                <FaCommentAlt
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setComment(!comment);
                  }}
                  fontSize={"25px"}
                  fill={comment ? "#EEEEEE" : "white"}
                />
              </div>
              <p className="text-center">203</p>
            </div>
            <div className="mb-5">
              <div className="flex justify-center">
                <FaShare
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setShare(!share);
                  }}
                  fontSize={"30px"}
                  fill={share ? "#EEEEEE" : "white"}
                />
              </div>
              <p className="text-center">100</p>
            </div>
            <div className="mb-5">
              <div className="flex justify-center">
                <HiSparkles fontSize={"30px"} />
              </div>
            </div>
          </div>
          <footer>
            <div className="h-[35px] flex justify-center absolute left-[40%] top-[93%]">
              <div>
                <p>Kéo xuống phía dưới để xem thêm </p>
                <div className="flex justify-center">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </footer>
        </div>

        {openModalVideo && (
          <ModalVideo
            isOpen={openModalVideo}
            setIsOpen={setOpenModalVideo}
            pathVideo={data.pathVideo}
          />
        )}
      </div>
    );
  };

  return (
    <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
      {dataVideo &&
        dataVideo.map((item: any, index: number) => {
          return <VideoSection key={item.video_id} data={item} />;
        })}
    </div>
  );
}
