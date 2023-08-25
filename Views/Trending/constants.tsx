import course1 from "@/public/Images/Profile/Mycourse/course1.png";
import course2 from "@/public/Images/Profile/Mycourse/course2.jpg";
import course3 from "@/public/Images/Profile/Mycourse/course3.jpg";
import course4 from "@/public/Images/Profile/Mycourse/course4.jpg";
import course5 from "@/public/Images/Profile/Mycourse/course5.jpg";
import course6 from "@/public/Images/Profile/Mycourse/course6.jpg";
import course7 from "@/public/Images/Trending/course/course-7.png";
import course8 from "@/public/Images/Trending/course/course-8.png";
import course9 from "@/public/Images/Trending/newCourse/docker.png";

import avatar1 from "@/public/Images/Trending/avatar/avt1.jpg";
import avatar2 from "@/public/Images/Trending/avatar/avt2.jpg";
import avatar3 from "@/public/Images/Trending/avatar/avt3.jpg";
import avatar4 from "@/public/Images/Trending/avt-trending-4.png";
import avatar5 from "@/public/Images/Trending/avt-trending-5.png";
import subAvt1 from "@/public/Images/Profile/Infomation/boy_thanh_lich.png";
import subAvt2 from "@/public/Images/Profile/Infomation/boy_thoi_trang.png";
import subAvt3 from "@/public/Images/Profile/Infomation/cool_green.jpg";
import video1 from "@/public/Images/Trending/newCourse/rails.jpg";
import video2 from "@/public/Images/Trending/newCourse/digital-marketing-banner.png";
import video3 from "@/public/Images/Trending/newCourse/laravel.jpg";
import video4 from "@/public/Images/Trending/newCourse/4198620_d610_2.jpg";
import video5 from "@/public/Images/Profile/Mycourse/course2.jpg";
import trending1 from "@/public/Images/Trending/course/treding-1.png";
import trending2 from "@/public/Images/Trending/course/trending-2.png";
import trending3 from "@/public/Images/Trending/course/trending-3.png";
import trending4 from "@/public/Images/Trending/course/trending-4.png";
import trending5 from "@/public/Images/Trending/course/trending-5.png";
import trending6 from "@/public/Images/Trending/course/trending-6.png";
import trending7 from "@/public/Images/Trending/course/trending-7.png";
import trending8 from "@/public/Images/Trending/course/trending-8.png";
import trending9 from "@/public/Images/Trending/course/trending-9.png";
import short1 from "@/public/Images/Trending/course/short-1.png";
import short2 from "@/public/Images/Trending/course/short-2.png";
import short3 from "@/public/Images/Trending/course/short-3.png";
import short4 from "@/public/Images/Trending/course/short-4.png";

export const DATA_TRENDING_PEOPLE = [
    {
        srcImage: avatar1,
        name: "Thomas Tump",
        views: "1.003.234",
    },
    {
        srcImage: avatar2,
        name: "Eira",
        views: "100.000",
    },
    {
        srcImage: avatar3,
        name: "Kim Ji Won",
        views: "140.000",
    },
    {
        srcImage: avatar4,
        name: "Dr. Jean",
        views: "300.000",
    },
    {
        srcImage: avatar5,
        name: "Dan JR",
        views: "1200.000",
    },
];

export const DATA_TRENDING_WEEK = [
    { value: "1.003.803", label: "Eden", height: 100 },
    { value: "311.803", label: "Eden", height: 70 },
    { value: "311.803", label: "Eden", height: 65 },
    { value: "85.000", label: "Eden", height: 30 },
    { value: "50.111", label: "Eden", height: 10 },
];

export const DATA_FEATURED_VIDEOS = [
    {
        srcImage: course1,
        info: [{ lesson: 10 }, { time: "2h 10m" }, { comment: 10 }],
        title: "Khoas hoc tieng han danh cho nguoi moi",
        level: "Beginner",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$75.99",
        priceType: "lifetime",
        author: "Thomas Tump",
    },
    {
        srcImage: course2,
        info: [{ lesson: 15 }, { time: "3h 30m" }, { comment: 5 }],
        title: "Advanced Python Programming",
        level: "Advanced",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$99.99",
        priceType: "subscription",
        author: "Jennifer Johnson",
    },
    {
        srcImage: course3,
        info: [{ lesson: 8 }, { time: "1h 45m" }, { comment: 20 }],
        title: "Introduction to Digital Marketing",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$49.99",
        priceType: "lifetime",
        author: "Michael Smith",
    },
    {
        srcImage: course4,
        info: [{ lesson: 12 }, { time: "2h 15m" }, { comment: 8 }],
        title: "Artificial Intelligence Fundamentals",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$59.99",
        priceType: "lifetime",
        author: "Emily Brown",
    },
    {
        srcImage: course5,
        info: [{ lesson: 20 }, { time: "4h 30m" }, { comment: 15 }],
        title: "Mastering Guitar Techniques",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$69.99",
        priceType: "lifetime",
        author: "Alex Turner",
    },
    {
        srcImage: course6,
        info: [{ lesson: 5 }, { time: "1h 30m" }, { comment: 3 }],
        title: "Photography for Beginners",
        level: "Beginner",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$39.99",
        priceType: "lifetime",
        author: "Sophia Clark",
    },
    {
        srcImage: course7,
        info: [{ lesson: 18 }, { time: "3h 45m" }, { comment: 12 }],
        title: "Web Development Bootcamp",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$89.99",
        priceType: "subscription",
        author: "Daniel Roberts",
    },
    {
        srcImage: course8,
        info: [{ lesson: 7 }, { time: "1h 20m" }, { comment: 6 }],
        title: "Introduction to Spanish",
        level: "Beginner",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$29.99",
        priceType: "lifetime",
        author: "Isabella Martinez",
    },
    {
        srcImage: course9,
        info: [{ lesson: 10 }, { time: "2h 30m" }, { comment: 8 }],
        title: "Yoga and Mindfulness",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$49.99",
        priceType: "lifetime",
        author: "Elena Johnson",
    },
];

export const DATA_TOP_FEATURED_VIDEOS = [
    {
        srcImage: video1,
        title: "Tập 1: Javascript là gì? | Lập trình Javascript cơ bản - Hoang Tu",
        author: "Hoang Tu",
        view: "100.000",
        timeCreate: "1 months ago",
    },
    {
        srcImage: video2,
        title: "Python Programming for Beginners | Learn Python in 5 Hours - Julia Adams",
        author: "Julia Adams",
        view: "250.000",
        timeCreate: "2 weeks ago",
    },
    {
        srcImage: video3,
        title: "Mastering Data Science with R | Complete Course - David Miller",
        author: "David Miller",
        view: "50.000",
        timeCreate: "3 months ago",
    },
    {
        srcImage: video4,
        title: "Digital Illustration Techniques | Procreate Tutorial - Emma Carter",
        author: "Emma Carter",
        view: "75.000",
        timeCreate: "1 week ago",
    },
    {
        srcImage: video5,
        title: "Sculpting Basics in Blender | 3D Modeling Tutorial - Alex Walker",
        author: "Alex Walker",
        view: "30.000",
        timeCreate: "2 months ago",
    },
];

export const DATA_TRENDING_COURSE = [
    {
        srcImage: trending1,
        info: [{ lesson: 10 }, { time: "2h 10m" }, { comment: 10 }],
        title: "Khoas hoc tieng han danh cho nguoi moi",
        level: "Beginner",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$75.99",
        priceType: "lifetime",
        author: "Thomas Tump",
    },
    {
        srcImage: trending2,
        info: [{ lesson: 15 }, { time: "3h 30m" }, { comment: 5 }],
        title: "Advanced Python Programming",
        level: "Advanced",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$99.99",
        priceType: "subscription",
        author: "Jennifer Johnson",
    },
    {
        srcImage: trending3,
        info: [{ lesson: 8 }, { time: "1h 45m" }, { comment: 20 }],
        title: "Introduction to Digital Marketing",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$49.99",
        priceType: "lifetime",
        author: "Michael Smith",
    },
    {
        srcImage: trending4,
        info: [{ lesson: 12 }, { time: "2h 15m" }, { comment: 8 }],
        title: "Artificial Intelligence Fundamentals",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$59.99",
        priceType: "lifetime",
        author: "Emily Brown",
    },
    {
        srcImage: trending5,
        info: [{ lesson: 20 }, { time: "4h 30m" }, { comment: 15 }],
        title: "Mastering Guitar Techniques",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$69.99",
        priceType: "lifetime",
        author: "Alex Turner",
    },
    {
        srcImage: trending6,
        info: [{ lesson: 5 }, { time: "1h 30m" }, { comment: 3 }],
        title: "Photography for Beginners",
        level: "Beginner",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$39.99",
        priceType: "lifetime",
        author: "Sophia Clark",
    },
    {
        srcImage: trending7,
        info: [{ lesson: 18 }, { time: "3h 45m" }, { comment: 12 }],
        title: "Web Development Bootcamp",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$89.99",
        priceType: "subscription",
        author: "Daniel Roberts",
    },
    {
        srcImage: trending8,
        info: [{ lesson: 7 }, { time: "1h 20m" }, { comment: 6 }],
        title: "Introduction to Spanish",
        level: "Beginner",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$29.99",
        priceType: "lifetime",
        author: "Isabella Martinez",
    },
    {
        srcImage: trending9,
        info: [{ lesson: 10 }, { time: "2h 30m" }, { comment: 8 }],
        title: "Yoga and Mindfulness",
        level: "Intermediate",
        avatar: [subAvt1, subAvt2, subAvt3],
        price: "$49.99",
        priceType: "lifetime",
        author: "Elena Johnson",
    },
];

export const DATA_SHORTS = [
    {
        srcImage: short1,
        title: "How to set up góc làm việc?",
        hastag: " #setup #job #decor",
        view: "471 K views",
    },
    {
        srcImage: short2,
        title: "Quick and Easy Breakfast Ideas",
        hashtag: "#recipes #food",
        view: "812 K views",
    },
    {
        srcImage: short3,
        title: "Beautiful Sunset Timelapse",
        hashtag: "#nature #sunset",
        view: "1.2 M views",
    },
    {
        srcImage: short4,
        title: "Learn to Dance in 5 Minutes",
        hashtag: "#dance #tutorial",
        view: "645 K views",
    },
];
