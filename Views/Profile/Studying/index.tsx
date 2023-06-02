import Image from "next/image";
import Link from "next/link";

import { BsListCheck } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

export default function Studying() {
  const courseData = [
    {
      title: "Khóa học Web cơ bản",
      description:
        "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "17",
      value: (
        <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
          FREE
        </p>
      ),
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (3).png")}
          layout="responsive"
          width={100}
          height={100}
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
      nameUser: "Dung Dev",
      process: 55,
      createdAt: "5 months ago",
    },
    {
      title: "Khóa học Python",
      description:
        "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: (
        <p className="w-[60px] h-[35px] text-[#A07D01] font-bold text-[16px] flex justify-center items-center">
          $80
        </p>
      ),
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (5).png")}
          layout="responsive"
          width={100}
          height={100}
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
      nameUser: "Thinh Dev",
      process: 93,
      createdAt: "5 months ago",
    },
    {
      title: "Khóa học Nhiếp ảnh",
      description:
        "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: (
        <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
          FREE
        </p>
      ),
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (1).png")}
          layout="responsive"
          width={100}
          height={100}
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
      nameUser: "Join",
      process: 85,
      createdAt: "5 months ago",
    },
    {
      title: "Chờ đợi liệu có đáng sợ",
      description:
        "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: (
        <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
          FREE
        </p>
      ),
      commentCounts: "72K",
      viewCounts: "24K",
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (6).png")}
          layout="responsive"
          width={100}
          height={100}
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
      nameUser: "Tung mood",
      process: 15,
      createdAt: "5 months ago",
    },
    {
      title: "Khóa học machine learning ",
      description:
        "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: (
        <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
          FREE
        </p>
      ),
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (2).png")}
          layout="responsive"
          width={100}
          height={100}
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
      nameUser: "Jully",
      process: 35,
      createdAt: "5 months ago",
    },
    {
      title: "Digital Marketing ",
      description:
        "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
      sessionTotal: "27",
      value: (
        <p className="w-[60px] h-[35px] text-[#007621] font-bold text-[16px] flex justify-center items-center">
          FREE
        </p>
      ),
      link: "/profile/mycourse/details",
      themenails: (
        <Image
          src={require("@/public/Images/Profile/Studying/course (4).png")}
          layout="responsive"
          width={100}
          height={100}
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
      nameUser: "MaiLan",
      process: 60,
      createdAt: "5 months ago",
    },
  ];

  const checkArray = [
    {
      min: 0,
      max: 20,
      color: "#9F0000",
    },
    {
      min: 21,
      max: 50,
      color: "#9F8F00",
    },
    {
      min: 51,
      max: 80,
      color: "#5D82E2",
    },
    {
      min: 81,
      max: 100,
      color: "#009A22",
    },
  ];

  function formatTheme(process: number) {
    return checkArray.map(({ min, max, color }, index) => {
      if (process >= min && process <= max) {
        return (
          <>
            <div className="w-[100%] h-[30px]  flex flex-nowrap items-center justify-between ">
              <div className="w-[60px] h-[30px]  flex items-center justify-center">
                <p className={`font-bold text-[12px]  `} style={{ color: color }}>
                  Process:
                </p>
              </div>
              <div className="w-[136px] h-[30px]  flex items-center justify-center">
                <div className="w-[126px] h-[10px]  bg-[#BEBEBE] rounded-[30px] flex items-center justify-center ">
                  <div className="w-[126px] h-[10px] flex justify-start items-center">
                    <div className={` h-[100%] rounded-[30px]  `} style={{backgroundColor: color, width: `${process}%`}}></div>
                  </div>
                </div>
              </div>
              <div className="w-[44px] h-[30px]  flex items-center justify-center">
                <p className={`font-bold text-[15px]  `} style={{ color: color }}>
                  {process}%
                </p>
              </div>
            </div>
          </>
        );
      }
    });
  }

  return (
    <div className="w-[100%] h-[100%]  flex flex-col overflow-hidden">
      <div className="w-full m-[10px] h-[100%] grid grid-cols-4 gap-4 ">
        {courseData.map(
          (
            {
              title,
              description,
              sessionTotal,
              value,
              userAvt,
              nameUser,
              link,
              themenails,
              process,
              createdAt,
            },
            index
          ) => (
            <Link key={title} href={link}>
              <div className="w-[250px] h-[305px] bg-white  flex flex-col rounded-[20px] overflow-hidden hover:cursor-pointer">
                <div className="w-[250px] h-[150px] relative overflow-hidden ">
                  {themenails}
                  <div className="w-[50%] h-[150px] absolute top-0 right-0 bg-[#000000b1] flex justify-center items-center ">
                    <div className="h-[30px] w-[100%] flex flex-wrap justify-evenly  items-center">
                      <p className="font-bold h-[30px]  text-[22px] text-[#ffffff] flex items-center">
                        {sessionTotal}
                      </p>
                      <div className="w-[30px] h-[30px] flex justify-center items-center">
                        <BsListCheck color="#ffffff" fontSize={"20px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] h-[155px] ">
                  <div className="w-[240px] h-[145px] m-[5px]  flex flex-col">
                    <div className="w-[100%] h-[35px] flex flex-nowrap justify-between items-center">
                      <p className="font-bold text-[16px] ">{title}</p>
                      {value}
                    </div>
                    <div className="w-[100%] h-[30px] flex justify-between">
                      <div className="w-[120px] h-full  flex justify-start items-center">
                        <div className="w-[30px] h-[30px] flex justify-center items-center">
                          {userAvt}
                        </div>
                        <p className="font-bold text-[12px] ml-[0.5rem]">
                          {nameUser}
                        </p>
                      </div>
                      <div className="w-[100px] h-full flex justify-center items-center ">
                        <p className="font-bold text-[12px] text-[#87878794] ">
                          {createdAt}
                        </p>
                      </div>
                    </div>
                    <div className="w-[100%] h-[45px]  flex flex-nowrap items-center">
                      <p className="font-thin text-[10px] ">{description}</p>
                    </div>

                    {formatTheme(process)}

                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
