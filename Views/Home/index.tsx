import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaExternalLinkAlt, FaSwatchbook } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";

export default function Home() {
  return (
    <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
      <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff]">
        <div className="mb-4 relative h-full">
          <Image
            className="w-[100%] h-[100%]"
            alt=""
            src={require("@/public/Images/video_test.png")}
            priority={true}
          />
          <div className="w-[413px] h-[194px] absolute left-[4%] top-[70%]">
            <div className="flex items-center">
              <FaSwatchbook fontSize={"15px"} />
              <h2 className="px-2 text-[24px] font-bold">Async, await ?</h2>
            </div>
            <div>
              <p className="text-[14px] font-medium">
                Học tập là quá trình tiếp thu kiến thức, kỹ năng và kinh nghiệm
                từ các nguồn khác nhau để phát triển bản thân. Xem thêm...
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[15px] font-semibold">Chi tiết khóa học: </p>
              <div className="flex items-center">
                <FaExternalLinkAlt fontSize={"12px"} />
                <p className="text-[15px] font-semibold">Async, await</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-[15px]">
                #Tung Kenny, #hoctap, #thanhnguoi.
              </p>
            </div>
          </div>
          <div className="h-[430px] w-[100px] absolute top-[20%] right-0 flex flex-col">
            <div></div>
            <div>
              <div>
                <AiTwotoneHeart className="" />
                <p className="">100K</p>
              </div>
            </div>
            <div></div>
            <div></div>
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
      </div>

      <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff]">
        <div className="mb-4 relative h-full">
          <Image
            className="w-[100%] h-[100%]"
            alt=""
            src={require("@/public/Images/video_test.png")}
            priority={true}
          />
          <div className="w-[413px] h-[194px] absolute left-[4%] top-[70%]">
            <div className="flex items-center">
              <FaSwatchbook fontSize={"15px"} />
              <h2 className="px-2 text-[24px] font-bold">Async, await ?</h2>
            </div>
            <div>
              <p className="text-[14px] font-medium">
                Học tập là quá trình tiếp thu kiến thức, kỹ năng và kinh nghiệm
                từ các nguồn khác nhau để phát triển bản thân. Xem thêm...
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[15px] font-semibold">Chi tiết khóa học: </p>
              <div className="flex items-center">
                <FaExternalLinkAlt fontSize={"12px"} />
                <p className="text-[15px] font-semibold">Async, await</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-[15px]">
                #Tung Kenny, #hoctap, #thanhnguoi.
              </p>
            </div>
          </div>
          <div className="h-[430px] w-[100px] absolute top-[20%] right-0 flex flex-col">
            <div></div>
            <div>
              <div>
                <AiTwotoneHeart className="" />
                <p className="">100K</p>
              </div>
            </div>
            <div></div>
            <div></div>
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
      </div>

      <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff]">
        <div className="mb-4 relative h-full">
          <Image
            className="w-[100%] h-[100%]"
            alt=""
            src={require("@/public/Images/video_test.png")}
            priority={true}
          />
          <div className="w-[413px] h-[194px] absolute left-[4%] top-[70%]">
            <div className="flex items-center">
              <FaSwatchbook fontSize={"15px"} />
              <h2 className="px-2 text-[24px] font-bold">Async, await ?</h2>
            </div>
            <div>
              <p className="text-[14px] font-medium">
                Học tập là quá trình tiếp thu kiến thức, kỹ năng và kinh nghiệm
                từ các nguồn khác nhau để phát triển bản thân. Xem thêm...
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[15px] font-semibold">Chi tiết khóa học: </p>
              <div className="flex items-center">
                <FaExternalLinkAlt fontSize={"12px"} />
                <p className="text-[15px] font-semibold">Async, await</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-[15px]">
                #Tung Kenny, #hoctap, #thanhnguoi.
              </p>
            </div>
          </div>
          <div className="h-[430px] w-[100px] absolute top-[20%] right-0 flex flex-col">
            <div></div>
            <div>
              <div>
                <AiTwotoneHeart className="" />
                <p className="">100K</p>
              </div>
            </div>
            <div></div>
            <div></div>
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
      </div>
    </div>
  );
}
