import { BiEditAlt } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import Image from "next/image";

export const stepsOption = [
    {
        icon: <GrSelect fontSize={20} className="mx-3" />,
        title: "CHOOSE COURSE",
        content: "Choose course to upload",
    },
    {
        icon: <FaWpforms fontSize={20} className="mx-3" />,
        title: "FILL FORM",
        content: "Fill the video information",
    },
    {
        icon: <BiEditAlt fontSize={25} className="mx-3" />,
        title: "EDIT",
        content: "Edit process",
    },
    {
        icon: <IoMdDoneAll fontSize={23} className="mx-3" />,
        title: "DONE !!",
        content: "The process is completed.",
    },
];

export const descriptionCourse = [
    {
        image: require("@/public/Images/CreateCourse/createCourse1.png"),
        title: "How to focus?",
        description: "Eliminate distractions, set goals, prioritize tasks, practice mindfulness...",
        cost: "FREE",
        count: "10",
    },
    {
        image: require("@/public/Images/CreateCourse/createCourse2.png"),
        title: "How to design?",
        description: "Understand user needs, research, sketch ideas, iterate, gather feedback..",
        cost: "$100",
        count: "12",
    },
    {
        image: require("@/public/Images/CreateCourse/createCourse3.png"),
        title: "English in my life ",
        description: "English has enriched my life, enabling global communication, expanding...",
        cost: "FREE",
        count: "30",
    },
    {
        image: require("@/public/Images/CreateCourse/createCourse3.png"),
        title: "English in my life ",
        description: "English has enriched my life, enabling global communication, expanding...",
        cost: "FREE",
        count: "30",
    },
    {
        image: require("@/public/Images/CreateCourse/createCourse3.png"),
        title: "English in my life ",
        description: "English has enriched my life, enabling global communication, expanding...",
        cost: "FREE",
        count: "30",
    },
];

export const dataCardDetail = [
    {
        id: 1,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail1.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
        id: 2,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail2.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 2: Chăm chỉ chưa chắc đã thành công | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 31.103 lượt xem • 10 tháng trước",
    },
    {
        id: 3,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail3.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 3: Cố gắng để làm gì ?  | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 42.103 lượt xem • 9 tháng trước",
    },
    {
        id: 4,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail4.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 4: Team work hiệu quả ?  | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 12.103 lượt xem • 5 tháng trước",
    },
    {
        id: 5,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail5.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 5: Học nhiều ngôn ngữ để làm gì? | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 2.103 lượt xem • 3 tháng trước",
    },
    {
        id: 6,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail6.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 6: Học cho đến bao giờ ? | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 103 lượt xem • 1 tuần trước",
    },
    {
        id: 7,
        image: (
            <Image
                className="rounded-md h-full"
                alt=""
                src={require("@/public/Images/Layout/Profile/detail6.png")}
            />
        ),
        title1: "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 6: Học cho đến bao giờ ? | Tùng Tâm Lý",
        title2: "Tùng Tâm Lý  • 103 lượt xem • 1 tuần trước",
    },
];