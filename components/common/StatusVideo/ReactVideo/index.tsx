import Image from "next/image";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaCommentAlt, FaShare } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { TiPlus } from "react-icons/ti";

interface IReactVideo {
  pathAvatar: string;
  heartCount: string | number;
  commentCount: string | number;
  shareCount: string | number;
}

export default function ReactVideo({
  pathAvatar,
  heartCount = 100,
  commentCount = 93,
  shareCount = 52,
}: IReactVideo) {
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <div className="absolute top-[25%] right-6 flex flex-col">
      <div className="mb-5 flex justify-center relative">
        <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex justify-center bg-[#b7b7b7]">
          <Image width={40} height={40} alt="" src={pathAvatar} />
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
        <p className="text-center select-none">{heartCount}K</p>
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
        <p className="text-center select-none">{commentCount}</p>
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
        <p className="text-center select-none">{shareCount}</p>
      </div>
      <div className="mb-5">
        <div className="flex justify-center">
          <HiSparkles className="hover:cursor-pointer" fontSize={"30px"} />
        </div>
      </div>
    </div>
  );
}
