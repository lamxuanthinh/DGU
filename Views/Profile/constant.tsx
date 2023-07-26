import Image from "next/image";

import { studying, detailData } from "@/model/course";


export const CourseData: studying[] = [
    {
        _id: '1',
        title: "Khóa học Web cơ bản Cho nguoi moi bat dau",
        link: "/profile/detail",
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
        process: "50%",
    },
    {
        _id: '2',
        title: "Khóa học Python chi voi 50$",
        link: "/profile/detail",
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
        process: "60%",
    },
    {
        _id: '3',
        title: "Khóa học Nhiếp ảnh Gianh cho photograper tu hoc",
        link: "/profile/detail",
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
        process: "31%",
    },
    {
        _id: '4',
        title: "Chờ đợi liệu có đáng sợ",
        link: "/profile/detail",
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
        process: "12%",
    },
    {
        _id: '4',
        title: "Khóa học machine learning ",
        link: "/profile/detail",
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
        process: "18%",
    },
    {
        _id: '5',
        title: "Digital Marketing ",
        link: "/profile/detail",
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
        process: "10%",
    },
];

export const dataCardDetail: detailData[] = [
    {
        id: 1,
        image: (
            <Image
                className="h-full w-full rounded-[5px] "
                alt=""
                src={require("@/public/Images/Layout/Profile/detail1.png")}
            />
        ),
        title1:
            "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
        id: 2,
        image: (
            <Image
                className="h-full w-full rounded-[5px] "
                alt=""
                src={require("@/public/Images/Layout/Profile/detail2.png")}
            />
        ),
        title1:
            "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 2: Chăm chỉ chưa chắc đã thành công | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 31.103 lượt xem • 10 tháng trước",
    },
    {
        id: 3,
        image: (
            <Image
                className="h-full w-full rounded-[5px] "
                alt=""
                src={require("@/public/Images/Layout/Profile/detail3.png")}
            />
        ),
        title1:
            "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 3: Cố gắng để làm gì ?  | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 42.103 lượt xem • 9 tháng trước",
    },
    {
        id: 4,
        image: (
            <Image
                className="h-full w-full rounded-[5px] "
                alt=""
                src={require("@/public/Images/Layout/Profile/detail4.png")}
            />
        ),
        title1:
            "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 4: Team work hiệu quả ?  | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 12.103 lượt xem • 5 tháng trước",
    },
    {
        id: 5,
        image: (
            <Image
                className="h-full w-full rounded-[5px] "
                alt=""
                src={require("@/public/Images/Layout/Profile/detail5.png")}
            />
        ),
        title1:
            "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 5: Học nhiều ngôn ngữ để làm gì? | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 2.103 lượt xem • 3 tháng trước",
    },
    {
        id: 6,
        image: (
            <Image
                className="h-full w-full rounded-[5px] "
                alt=""
                src={require("@/public/Images/Layout/Profile/detail6.png")}
            />
        ),
        title1:
            "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 6: Học cho đến bao giờ ? | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 103 lượt xem • 1 tuần trước",
    },
];


