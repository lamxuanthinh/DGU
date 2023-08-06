


import { notification } from "@/model/notification";

export const notificationData: notification[] = [

    {
        type: "new-follow",
        link: "#",
        user: {
            name: "Jane Smith",
            avt: "@/public/Images/Notifications/boy_thoi_trang.png",
        },
        comment: null,
        course: null,
        time: "2 minutes",
    },
// ==========================================
//  
//
//
//============= About React VIDEO ============ 
    {
        type: "love-video",
        link: "#",
        user: {
            name: "Jocelyn Lam",
            avt: "@/public/Images/Notifications/boy_hip_hop.png",
        },
        comment: null,
        course: null,
        time: "5 minutes",
    },
    {
        type: "comment-video",
        link: "#",
        user: {
            name: "Jane Smith",
            avt: "@/public/Images/Notifications/boy3.jpg",
        },
        comment: {
            id: "1",
            content_comment: "Your post is very nice, thanks for your knowledge. ",
        },
        course: null,
        time: "2 minutes",
    },
    {
        type: "share-video",
        link: "#",
        user: {
            name: "Jane Smith",
            avt: "@/public/Images/Notifications/girl_beauty.png",
        },
        comment: null,
        course: {
            type: "register-course-from-user",
            fee: 100.00,
            course_name: "How to rich?",
        },
        time: "2 minutes",
        
    },
// ==========================================
//  
//
//
// ============ About MONEY COURSE ============
    {
        type: "register-course",
        link: "#",
        user: {
            name: "Yang",
            avt: "@/public/Images/Notifications/boy_thanh_lich.png",
        },
        comment: null,
        course: {
            type: "register-course-from-user",
            fee: 100.00,
            course_name: "How to rich?",
        },
        time: "2 minutes",
    },
    {
        type: "receive-money",
        link: "#",
        user: {
            name: "Yang",
            avt: "@/public/Images/Notifications/boy_thanh_lich.png",
        },
        comment: null,
        course: {
            type: "receive-money-from-user",
            fee: 3.112,
            course_name: "Sleep to max scroce.",
        },
        time: "2 minutes",
    },
    {
        type: "success-register-course",
        link: "#",
        user: {
            name: "Jane Smith",
            avt: "@/public/Images/Notifications/boy_thanh_lich.png",
        },
        comment: null,
        course: {
            type: "success-register-course",
            fee: null,
            course_name: "How to rich? ",
        },
        time: "2 minutes",
    },
// ==========================================
//  
//
//
// ============ About Top Ranking ============

// ==========================================
//  
//
//
// ============ About Tag ============

// ==========================================

];


