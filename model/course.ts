import { StaticImageData } from "next/image";

export interface studying {
    _id: string;
    title: string;
    link: string;
    themenails: JSX.Element;
    userAvt: JSX.Element;
    nameUser: string;
    process: string;
}

export interface detailData {
    id: number;
    image: JSX.Element;
    title1: string;
    title2: string;
}

// export interface IMyCourseData {

//     id: string | number;
//     title: string;
//     content: string;
//     quantity: string | number;
//     price: string;
//     image: any;
// }

export interface IMyCourseData {
    _id: string;
    userId: string;
    title: string;
    author: string;
    description: string;
    price: string;
    level: string;
    status: string;
    thumbnail: any;
    createdAt: string;
    updatedAt: string;
}

export interface MyCoursePayload {
    title: string;
    author: string;
    description: string;
    price: string;
    level: string;
    status: string;
    thumbnail: File;
}

export interface ILessonData {
    description: string;
    image: any;
    title: string;
    author: string;
}

export interface DataResponse {
    message: String;
    status: string;
    metaData: {
        courseList: IMyCourseData[];
    };
} 

export interface IDataCardCourse {
    srcImage: string | StaticImageData;
    info: [{ lesson: number }, { time: string }, { comment: number }];
    title: string;
    level: string;
    avatar: string[] | StaticImageData[];
    price: string;
    priceType: string;
    author: string;
}