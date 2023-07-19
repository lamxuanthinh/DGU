import Image from "next/image";

import { detailData } from "@/model/course";

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