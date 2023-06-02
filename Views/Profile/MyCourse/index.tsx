import Image from "next/image";
import Link from "next/link";

import { BsListCheck } from "react-icons/bs";
import { BiComment } from "react-icons/bi";



export default function MyCourse() {

  const courseData = [
    {
      title: "Khóa học Web cơ bản",
      description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "17",
      value: <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
              FREE
            </p>,
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: <Image
                    src={require("@/public/Images/Profile/Mycourse/course (3).png")}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="logo"
                  />
    },
    {
      title: "Khóa học Python",
      description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: <p className="w-[60px] h-[35px] text-[#A07D01] font-bold text-[16px] flex justify-center items-center">
                $80
              </p>,
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: <Image
                    src={require("@/public/Images/Profile/Mycourse/course (5).png")}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="logo"
                    />
    },
    {
      title: "Khóa học Nhiếp ảnh",
      description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
                FREE
              </p>,
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: <Image
                    src={require("@/public/Images/Profile/Mycourse/course (1).png")}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="logo"
                    />
    },
    {
      title: "Chờ đợi liệu có đáng sợ",
      description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
              FREE
            </p>,
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: <Image
                    src={require("@/public/Images/Profile/Mycourse/course (6).png")}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="logo"
                    />
    },
    {
      title: "Khóa học machine learning ",
      description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
              FREE
            </p>,
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: <Image
                    src={require("@/public/Images/Profile/Mycourse/course (2).png")}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="logo"
                    />
    },
    {
      title: "Digital Marketing ",
      description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
              FREE
            </p>,
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: <Image
                    src={require("@/public/Images/Profile/Mycourse/course (4).png")}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="logo"
                    />
    }
  ];


  return( 
    <div className="w-[100%] h-[100%]  flex flex-col overflow-hidden">
      <div className="w-full m-[10px] h-[100%] grid grid-cols-4 gap-4 ">

        {courseData.map(({ title, description, sessionTotal, value, commentCounts, viewCounts, link, themenails  }, index) => (
          <Link key={title} href={link}>
            <div className="w-[250px] h-[275px] bg-white  flex flex-col rounded-[20px] overflow-hidden hover:cursor-pointer">
              <div className="w-[250px] h-[150px] relative overflow-hidden ">
                {themenails}
                <div className="w-[50%] h-[150px] absolute top-0 right-0 bg-[#00000082] flex justify-center items-center ">
                  <div className="h-[30px] w-[100%] flex flex-wrap justify-evenly  items-center">
                    <p className="font-bold h-[30px]  text-[22px] text-[#ffffff] flex items-center">{sessionTotal}</p> 
                    <div className="w-[30px] h-[30px] flex justify-center items-center">
                      <BsListCheck 
                        color="#ffffff"
                        fontSize={"20px"}    
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[125px] " >
                <div className="w-[240px] h-[115px] m-[5px]  flex flex-col">
                  <div className="w-[100%] h-[35px] flex flex-nowrap justify-between items-center">
                    <p className="font-bold text-[16px] ">
                      {title}
                    </p>
                    {value}
                  </div>
                  <div className="w-[100%] h-[45px]  flex flex-nowrap items-center">
                    <p className="font-thin text-[10px] ">
                      {description}
                    </p>
                    
                  </div>
                  <div className="w-[100%] h-[35px]  flex flex-nowrap items-center justify-between ">
                    <div className="w-[45px] h-[100%]  flex flex-nowrap items-center justify-between">
                      <BiComment 
                        color="#000000"
                        fontSize={"12px"} 
                      />
                      <p className="font-bold text-[12px] ">
                        {commentCounts}
                      </p>
                    </div>
                    <div className="w-[140px] h-[100%]  flex flex-nowrap items-center">
                      <div className="w-[70px] h-[100%]  flex flex-nowrap items-center justify-center">
                        <p className="font-bold text-[12px] ">
                          {viewCounts} views
                        </p>
                      </div>
                      <div className="w-[70px] h-[100%] flex flex-nowrap items-center justify-center overflow-hidden">
                        <Image 
                          src={require("@/public/Images/Profile/Mycourse/boy_be_boi.png")}
                          alt=""
                          style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            border: '1px solid #7f7f7f34'
                          }}
                        />
                        <Image 
                          src={require("@/public/Images/Profile/Mycourse/boy_thanh_lich.png")}
                          alt=""
                          style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            border: '1px solid #7f7f7f34'
                          }}
                        />
                        <Image 
                          src={require("@/public/Images/Profile/Mycourse/boy_thoi_trang.png")}
                          alt=""
                          style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            border: '1px solid #7f7f7f34'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}


      </div>

    </div>
  );
}
