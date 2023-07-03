import { useState } from "react";
import Image from "next/image";
import { dataSlideLogin } from "@/public/data/slideLogin";

export default function SlideLogin() {
     const [currentSlide, setCurrentSlide] = useState(dataSlideLogin[0].key);
     return <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="w-[469px] bg-[#000000] rounded-xl rounded-br-[50px] z-3"
     >
          {dataSlideLogin.map((itemSlide) => {
               return (
                    itemSlide.key === currentSlide && (
                         <div key={itemSlide.key}>
                              <div className="h-[450px] relative">
                                   {itemSlide.images?.map((image, key) => (
                                        <Image key={key} className={`absolute ${image.animation}`}
                                             width={image.width}
                                             height={image.height}
                                             src={image.src}
                                             alt={image.alt}
                                        />
                                   ))}
                              </div>
                              <div className="flex flex-col">
                                   <div className="flex justify-center mb-10">
                                        <div className="w-[372px] animate-fadeIn">
                                             <h1 className="text-white text-[32px] font-bold text-center pb-5">
                                                  {itemSlide.title}
                                             </h1>
                                             <p className="text-white text-[16px] font-bold text-center">
                                                  {itemSlide.subtitle}
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )
               );
          })}
          <div className="w-[100%] flex justify-center">
               <ul className="bg-[#3c3b3bd2] w-[110px] h-[30px] rounded-xl flex px-2 items-center justify-around">
                    {dataSlideLogin.map((slideItem) => {
                         return (
                              <li
                                   key={slideItem.key}
                                   className={`${slideItem.key === currentSlide ? "bg-[#D9D9D9]" : ""
                                        } w-[20px] h-[20px] rounded-xl flex items-center justify-center hover:cursor-pointer`}
                                   onClick={() => {
                                        setCurrentSlide(slideItem.key);
                                   }}
                              >
                                   <div
                                        className={`${slideItem.key === currentSlide
                                             ? "bg-[#00FF85]"
                                             : "bg-[#D9D9D9]"
                                             } w-[10px] h-[10px] rounded-xl`}
                                   ></div>
                              </li>
                         );
                    })}
               </ul>
          </div>
     </div>
}