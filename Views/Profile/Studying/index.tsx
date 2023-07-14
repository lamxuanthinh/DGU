import Image from "next/image";
import Link from "next/link";

import { BsListCheck, BsPeople } from "react-icons/bs";
import { BiChevronRight, BiCommentDetail } from "react-icons/bi";
import { GiOpenBook } from "react-icons/gi";
import { FaRegCommentAlt } from "react-icons/fa";


import { CourseCardInfo, StudyingCourseItem, StudyingCourseItemTitle, StudyingCourseItemDescription } from "../ProfileStyled";



export default function Studying() {
  const courseData = [
    {
      title: "Khóa học Web cơ bản Cho nguoi moi bat dau",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (3).png")}
          
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",

          }}
          alt="logo"
        />
      ),
      userAvt: (
        <Image
          src={require("@/public/Images/Profile/Studying/boy_be_boi.png")}
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid #95959552",
          }}
          alt="course user avt"
        />
      ),
      nameUser: "Tung Dev",
    },
    {
      title: "Khóa học Python chi voi 50$",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (5).png")}
          
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",

          }}
          alt="logo"
        />
      ),
      userAvt: (
        <Image
          src={require("@/public/Images/Profile/Studying/boy_cau_long.png")}
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid #95959552",
          }}
          alt="course user avt"
        />
      ),
      nameUser: "Tung AI",
    },
    {
      title: "Khóa học Nhiếp ảnh Gianh cho photograper tu hoc",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (1).png")}
          
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",

          }}
          alt="logo"
        />
      ),
      userAvt: (
        <Image
          src={require("@/public/Images/Profile/Mycourse/boy_thoi_trang.png")}
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid #95959552",
          }}
          alt="course user avt"
        />
      ),
      nameUser: "Tung Photographer",
    },
    {
      title: "Chờ đợi liệu có đáng sợ",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (6).png")}
          
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",

          }}
          alt="logo"
        />
      ),
      userAvt: (
        <Image
          src={require("@/public/Images/Profile/Studying/boy_thoi_trang.png")}
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid #95959552",
          }}
          alt="course user avt"
        />
      ),
      nameUser: "Tung Tam Li",
    },
    {
      title: "Khóa học machine learning ",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (2).png")}
          
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",

          }}
          alt="logo"
        />
      ),
      userAvt: (
        <Image
          src={require("@/public/Images/Profile/Studying/girl_phong_vien.png")}
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid #95959552",
          }}
          alt="course user avt"
        />
      ),
      nameUser: "Tung AI",
    },
    {
      title: "Digital Marketing ",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (4).png")}
          
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",

          }}
          alt="logo"
        />
      ),
      userAvt: (
        <Image
          src={require("@/public/Images/Profile/Studying/girl_thu_y.png")}
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid #95959552",
          }}
          alt="course user avt"
        />
      ),
      nameUser: "Dung Market",
    },
  ];

  return (
    <div className="w-full h-[100%]   flex flex-col justify-center items-center  ">
      <div className="w-full m-[10px] h-[100%] flex justify-center items-center overflow-hidden p-[10px]">
        <div className="  w-full  flex flex-col justify-center items-center   ">
          {courseData.map(({ title,  link, userAvt, themenails, nameUser  }, index) => (
            <Link key={title} href={link} className={` w-[92%] `}> 
              <div className=" dgu-course-card w-full h-[140px] flex flex-wrap justify-between items-center  rounded-[10px] mb-[10px] overflow-hidden hover:cursor-pointer  ">
                <StudyingCourseItem className=" flex flex-wrap justify-start items-center   ">
                  <div className="w-[140px] h-[140px] flex justify-center items-center">
                    <div className="w-[120px] h-[120px] border-[3px] border-[#828282] overflow-hidden rounded-[10px]  flex justify-center items-center">
                      {themenails}
                    </div>
                  </div>
                  <div className="w-[250px] ml-[1rem] flex flex-col justify-evenly items-center ">
                    <StudyingCourseItemTitle className="" >
                      <p className="text-[16px] font-bold  "> 
                        {title}
                      </p>
                    </StudyingCourseItemTitle>
                    <StudyingCourseItemDescription className=" " >
                      <p className="text-[12px] font-bold text-[#878787]  "> 
                        {title}
                      </p>
                    </StudyingCourseItemDescription>
                  </div>
                  <div className="flex flex-wrap justify-start items-center w-[85px]  m-[2rem] " >
                    <div className="flex flex-wrap justify-start items-center h-[25px] ">
                      <Image
                        src={require("@/public/Images/Profile/Studying/course (1).png")}
                        style={{ 
                          width: "25px",
                          height: "25px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        alt="avt"
                      />
                      <Image
                        src={require("@/public/Images/Profile/Studying/course (2).png")}
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
                        src={require("@/public/Images/Profile/Studying/course (3).png")}
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
                        src={require("@/public/Images/Profile/Studying/course (4).png")}
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
                        4k+
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center w-[150px] h-[20px] bg-[#f1f1f1] rounded-[20px] " >
                    <div className="flex flex-wrap justify-end items-center w-[75px] h-[20px] bg-[#85daff] text-[#448ab3] font-bold text-[15px] rounded-[20px] ">
                      50%
                    </div>
                  </div>


                </StudyingCourseItem>
                
                

                <div className="w-[60px] h-full flex justify-center items-center" >
                  <BiChevronRight fontSize={'24px'} />
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
