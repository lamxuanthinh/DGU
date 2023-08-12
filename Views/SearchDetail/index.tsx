import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProfileHeader from "@/components/common/ProfileHeader";
import Button from "@/components/common/Button";
import avatarImage from "@/public/Images/Profile/Mycourse/boy_thanh_lich.png"
import courseImage from "@/public/Images/Profile/Mycourse/course (5).png"
import relatedImage from "@/public/Images/Profile/Mycourse/course (5).png"
import { GiFilmStrip } from "react-icons/gi";
import { BsChevronCompactDown, BsChevronCompactUp, BsThreeDots } from "react-icons/bs";
import { RiMovieLine, RiSendPlane2Fill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { iconData } from "./constants";

function SearchDetail() {
     const videoRef = useRef<HTMLVideoElement>(null);
     const [heightVideo, setHeightVideo] = useState<number>(0)
     const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     const courseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     const [courseShowArray, setCourseShowArray] = useState<Array<number>>(courseArray.slice(0, 5));
     const [isShowMoreCourse, setIsShowMoreCourse] = useState<boolean>(false);

     useEffect(() => {
          if (videoRef.current) {
               const heightVideo = videoRef.current.offsetHeight;
               setHeightVideo(heightVideo);
          }
     }, []);

     useEffect(() => {
          if (isShowMoreCourse) {
               setCourseShowArray(courseArray)
          } else {
               setCourseShowArray(courseArray.slice(0, 5))
          }
     }, [isShowMoreCourse]);

     const handleToggleMoreCourse = () => {
          setIsShowMoreCourse(!isShowMoreCourse)
     }

     return (
          <div className="w-full bg-[#dbdbdb] flex flex-col gap-y-[5px] mb-16 ">
               <div className="bg-white">
                    <ProfileHeader></ProfileHeader>
               </div>
               <div className="relative bg-white px-2 md:px-[30px] py-[8px]">
                    <div className="flex items-center text-[#8a8a8a] mb-4">
                         <GiFilmStrip className="text-2xl" />
                         <h5 className="font-semibold text-xl ml-2">Shorts</h5>
                    </div>
                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 mb-3">
                         {courseShowArray.map((item) => (
                              <li key={item} className="w-full place-content-center">
                                   <Image src={courseImage} alt="image course" className="h-[350px] w-full rounded-[5px]"></Image>
                                   <h4 className="font-semibold text-lg mt-4">How to set up góc làm việc? <br />
                                        #setup #job #decor
                                   </h4>
                                   <span className="text-sm text-[#979292]">471K views</span>
                              </li>
                         ))}
                    </ul>
                    <Button className="mx-auto text-2xl px-5 py-2 mt-1" onClick={handleToggleMoreCourse}>
                         {isShowMoreCourse ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                    </Button>
               </div>
               <div className="mt-2 px-2 md:px-[30px] py-[8px] bg-white">
                    <div className="flex items-center text-[#8a8a8a] mb-4">
                         <RiMovieLine className="text-2xl" />
                         <h5 className="font-semibold text-xl ml-2">Video</h5>
                    </div>
                    <div className="flex flex-col xl:flex-row">
                         <div className="w-full mb-8 xl:mb-0 xl:w-[65%] mr-5">
                              <div className="rounded-[5px] overflow-hidden mb-6">
                                   <video ref={videoRef} src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/EyvF0jkPg/videoblocks-portrait-of-young-caucasian-bearded-coach-businessman-hosting-online-webinar-using-laptop-web-conference-call-at-home_sk6qxg028__c30e9293cb24b8df3d5a2de0688141a3__P720.mp4?type=preview&origin=VIDEOBLOCKS&timestamp_ms=1687421124503&publicKey=2lokuPIv3fAKGDKliUAiyHgdBftPlUJJXmQIeeI4MNa58ZQpXYMoH4pj1NB37cRu&organizationId=103593&apiVersion=2.0&stockItemId=10907825&resolution=720p&endUserId=a94a8fe5ccb19ba61c4c0873d391e987982fbbd3&projectId=test&searchId=741e93f3-8c02-4ab0-9af8-a0e3bfc843ee&searchPageId=a1cd9ca1-65b6-49f0-8f7e-f5b3b148b8e6" controls></video>
                              </div>
                              <div className="flex justify-between items-center flex-wrap gap-y-3 md:gap-y-0 md:flex-nowrap">
                                   <div className="flex items-center py-1 cursor-pointer transition-opacity hover:opacity-80 ">
                                        <div className="w-[40px] h-[40px] overflow-hidden mr-3 relative rounded-[50%]">
                                             <Image fill src={avatarImage} alt="avt image" />
                                        </div>
                                        <div>
                                             <h4 className="font-bold text-sm md:text-lg">Kenny tung</h4>
                                             <p className="text-xs text-[#8F8F8F]">
                                                  31,231,810 followers
                                             </p>
                                        </div>
                                   </div>
                                   <div className="flex gap-x-4">
                                        <Button className="w-[100px] h-[38px] text-white rounded-[5px] bg-[#ADADAD]" leftIcon={<FaShare />}>Share</Button>
                                        <Button className="w-[100px] h-[38px] text-white rounded-[5px] bg-[#EA5F5F]" leftIcon={<AiTwotoneHeart />}>Liked</Button>
                                   </div>
                              </div>
                              <div className="flex mt-3 justify-between flex-wrap gap-y-3 md:gap-y-0 md:flex-nowrap">
                                   <div className="w-full md:w-3/5 mr-8">
                                        <h3 className="font-extrabold text-2xl mb-4">Học một cách hiệu quả và đạt kết quả cao với khóa học</h3>
                                        <p className="text-[#5D5454] text-base font-semibold">Khóa học này thật tuyệt vời! Tôi đã học rất nhiều kiến thức mới và phát triển kỹ năng của mình. Giảng viên rất dễ hiểu và hỗ trợ tận tình. Tôi rất hài lòng với nội du ng của khóa học và chắc chắn sẽ tiếp tục học thêm nữa. Cảm ơn đội ngũ tạo ra khóa học này!</p>
                                   </div>
                                   <div className="text-[#A19D9D]">
                                        {iconData.map((item, index) => (
                                             <div key={index} className="flex items-center py-1 ">
                                                  {item.icon}
                                                  <span className="text-lg ml-3">{item.label}</span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                         <div className="flex-1">
                              <div className="border border-solid border-[#989898]/[0.18] py-5 mb-6">
                                   <div className="flex items-center justify-between pb-4 border-b-[1px] border-solid border-[#989898]/[0.18] px-5">
                                        <h5 className="text-[#646464]  text-xl">Live Chat</h5>
                                        <p className="flex items-center text-lg">
                                             <MdPeopleOutline className="text-2xl" />
                                             <span className="ml-2">31,210 peoples</span>
                                        </p>
                                   </div>
                                   <ul style={{ height: `${heightVideo - 143}px` }} className="overflow-y-scroll no-scrollbar px-5 mb-2">
                                        {tempArray.map((item) => (
                                             <li key={item}>
                                                  <div className="flex items-start py-1 cursor-pointer transition-opacity hover:opacity-80 ">
                                                       <div className="w-[40px] h-[40px] overflow-hidden mr-3 relative rounded-[50%] flex-shrink-0 mt-2">
                                                            <Image fill src={avatarImage} alt="avt image" />
                                                       </div>
                                                       <div>
                                                            <h4 className="font-bold text-sm md:text-lg">Kenny tung</h4>
                                                            <p className="text-xs text-[#8F8F8F] max-w-[400px]">
                                                                 Khóa học này thật tuyệt vời! Tôi đã học rất nhiều kiến thức mới và phát triển kỹ năng của mình. Giảng viên rất dễ hiểu và hỗ trợ tận tình. Tôi rất hài lòng với nội dung của khóa học và chắc chắn sẽ tiếp tục học thêm nữa. Cảm ơn đội ngũ tạo ra khóa học này!
                                                            </p>
                                                       </div>
                                                  </div>
                                             </li>
                                        ))}
                                   </ul>
                                   <div className="border border-solid border-[#A9A9A9]/[0.29] flex items-center px-[4px] md:px-2 py-2 bg-[#DEDEDE]/[0.25] mx-1 md:mx-4 rounded-[5px] justify-between">
                                        <Button className="w-[30px] h-[30px] bg-[#ECEAEA] rounded-[5px] mr-2 md:mr-4"><BsThreeDots></BsThreeDots></Button>
                                        <input type="text" placeholder="write your message" className="outline-none md:flex-1 bg-transparent w-32 md:w-auto" />
                                        <Button className="w-[30px] h-[30px] bg-primary text-[#0937D9] rounded-[5px]">
                                             <RiSendPlane2Fill></RiSendPlane2Fill>
                                        </Button>
                                   </div>
                              </div>
                              <div className="border border-solid border-[#989898]/[0.18] py-5">
                                   <div className="flex items-center justify-between pb-4 border-b-[1px] border-solid border-[#989898]/[0.18] px-5">
                                        <h5 className="text-[#646464]  text-xl">Related Videos</h5>
                                   </div>
                                   <ul className="h-[350px] overflow-y-scroll no-scrollbar px-5 mb-2">
                                        {tempArray.map((item) => (
                                             <li key={item}>
                                                  <div className="flex items-start py-1 cursor-pointer transition-opacity hover:opacit y-80 ">
                                                       <div className="w-[90px] h-[90px] overflow-hidden mr-3 relative rounded-[5px] flex-shrink-0 mt-2">
                                                            <Image fill src={relatedImage} alt="avt image" />
                                                       </div>
                                                       <div>
                                                            <h4 className="font-bold text-sm md:text-lg">Khám phá khóa học đỉnh cao về [chủ đề], giúp bạn trở thành chuyên gia thực thụ!</h4>
                                                            <p className="text-xs text-[#8F8F8F] max-w-[400px]">
                                                                 Kenny Truong <br />
                                                                 81,031,122,003 views • 2 days ago
                                                            </p>
                                                       </div>
                                                  </div>
                                             </li>
                                        ))}
                                   </ul>
                                   <Button className="bg-primary text-black w-[calc(100%-32px)] h-[40px] rounded-[5px] mx-auto font-semibold">
                                        See all related videos (10)
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default SearchDetail;