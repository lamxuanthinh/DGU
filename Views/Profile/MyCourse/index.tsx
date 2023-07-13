import Image from "next/image";
import Link from "next/link";

import { CourseCardInfo } from "@/Views/Profile/ProfileStyled";

import { BiCommentDetail } from "react-icons/bi";

export default function MyCourse() {

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
          src={require("@/public/Images/Profile/Studying/boy_thanh_lich.png")}
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


  return( 
    <div className="w-[100%] h-[100%]   flex flex-col overflow-hidden p-[10px] ">
      <div className="w-full m-[10px] h-[100%] flex justify-center items-center">
        <div className="w-full xl:max-w-[1700px] zero:max-w-[400px] md:max-w-[900px] 3xl:max-w-[1900px]    mx-auto grid  md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 px-[20px]  ">
          {courseData.map(({ title,  link, userAvt, themenails, nameUser  }, index) => (
            <Link key={title} href={link}>
              <div className=" dgu-course-card h-[340px] flex flex-col rounded-[10px] mx-[5px] my-[10px] overflow-hidden hover:cursor-pointer  ">
                <div className="w-full h-[180px] flex justify-center items-center relative">
                  {themenails}
                  <div className="w-full bottom-0 left-0 absolute" >
                    <div className="flex flex-wrap  my-[0.5rem]  ">
                      <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex justify-start items-center h-[25px] rounded-[20px] "  >
                        <p className="text-[10px] font-bold p-2 "> 
                          10 Lesson
                        </p>
                      </div>
                      <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex justify-start items-center h-[25px] rounded-[20px] "  >
                        <p className="text-[10px] font-bold p-2 "> 
                          2h 10m
                        </p>
                      </div>
                      <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex flex-wrap justify-evenly items-center w-[100px] h-[25px] rounded-[20px] "  >
                        <BiCommentDetail fontSize={'10px'} style={{ marginTop: '0.1rem' }} />
                        <p className="text-[10px] font-bold "> 
                          10 comments
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[160px] flex justify-center items-center">
                  <CourseCardInfo className=" flex flex-col justify-evenly items-center " >
                    <div className="w-full h-[60px]  flex flex-wrap justify-start items-center " >
                      <p className="text-[16px] font-bold  "> 
                        {title}
                      </p>
                    </div>
                    <div className="w-full h-[25px] flex flex-wrap justify-start " >
                      <div className="bg-[#fcf8bae6] flex justify-start items-center h-[25px] rounded-[20px] "  >
                        <p className="text-[10px] font-bold p-2 "> 
                          Beginner
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-start items-center h-[25px] ml-[1rem] ">
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
                    <div className="w-full h-[25px]  flex flex-wrap justify-evenly items-center " >
                      <div className="flex flex-wrap justify-evenly items-center">
                        <p className="text-[12px] text-[#000000] font-semibold"> 
                          $75.99
                        </p>
                        <p className="text-[10px] text-[#8B8B8B] font-semibold"> 
                          /lifetime
                        </p>
                      </div>
                      <div className="bg-[#000000] flex justify-start items-center h-[25px] rounded-[20px] "  >
                        <p className="text-[10px] text-[#ffffff] font-bold p-2 "> 
                          Joinclass now
                        </p>
                      </div>
                    </div>
                  </CourseCardInfo>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}
