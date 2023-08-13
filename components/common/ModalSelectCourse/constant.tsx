import Image from "next/image";

export const myCourse: any = [
    {
        id: "0",
        title: "How to study Node Js ? -.-",
        content:
            "Node.js 123 is an advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "12",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course1.png")} alt="" />
        ),
    },
    {
        id: "1",

        title: "How to study Node Js? *.*",
        content:
            "Node.js is Tung Heo an advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "5",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course2.jpg")} alt="" />
        ),
    },
    {
        id: "2",

        title: "How to study Node Js? @_@",
        content:
            "Node.js is Tinh heo an advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "10",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course6.jpg")} alt="" />
        ),
    },
    {
        id: "3",

        title: "How to study Node Js? =.=",
        content:
            "Node.js is an Giang dep trai advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "15",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course4.jpg")} alt="" />
        ),
    },
    {
        id: "4",

        title: "How to study Node Js?",
        content:
            "Node.js is Thinh heo an advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "1",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course5.jpg")} alt="" />
        ),
    },
    {
        id: "5",
        title: "How to study Node Js ? -.-",
        content:
            "Node.js 123 is an advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "12",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course1.png")} alt="" />
        ),
    },
    {
        id: "6",

        title: "How to study Node Js? *.*",
        content:
            "Node.js is Tung Heo an advanced web programming course focused on teaching how to use Node.js - a server-side JavaScript run",
        quantity: "5",
        price: "$75.99",
        image: (
            <Image className="rounded-md h-full" src={require("@/public/Images/Profile/Mycourse/course2.jpg")} alt="" />
        ),
    },
];

export const courseInput = {
    title: "Khóa học Web cơ bản Cho nguoi moi bat dau",
    themenails: (
        <Image
            src={require("@/public/Images/CreateCourse/image_not_found.png")}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
            alt="logo"
        />
    ),
    nameUser: "Tung Dev",
    price: 200,
};
