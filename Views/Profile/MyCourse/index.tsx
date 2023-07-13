import Image from "next/image";
import Link from "next/link";


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
        <div className="w-auto flex flex-wrap justify-start items-center">
          {courseData.map(({ title,  link, userAvt, themenails, nameUser  }, index) => (
            <Link key={title} href={link}>
              <div className=" dgu-course-card w-[300px] h-[250px] flex flex-col rounded-[10px] mx-[5px] my-[10px] overflow-hidden hover:cursor-pointer  ">
                <div className="w-full h-[150px]  flex justify-center items-center relative">
                  {themenails}
                  <div className="absolute w-[60px] bg-[#ffffffc3] h-[20px] rounded-[10px] bottom-[10px] right-[10px] flex justify-center items-center " >
                    <p className="text-[#000000] text-[14px] font-medium ">
                      12/31
                    </p>
                  </div>
                </div>
                <div className="w-full h-[100px]  flex justify-center items-center">
                  <div className="w-[290px] h-[90px] flex flex-col justify-between items-center " >
                    <div className="w-full h-[60px] flex flex-wrap justify-start " >
                      <p className="text-[16px] font-bold  " > 
                        {title}
                      </p>
                    </div>
                    <div className="w-full h-[30px] flex flex-wrap  " >
                      {userAvt}
                      <p className="text-[#868686] text-[16px] font-medium ml-[1rem] ">
                        {nameUser}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}
