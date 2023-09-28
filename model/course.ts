import { StaticImageData } from "next/image";
import { IApiResponse } from "@/model";

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

export interface IMyCourseData {
    _id?: string;
    userId?: string;
    title: string;
    author: string;
    description?: string;
    price: string | number;
    level: string;
    status?: string;
    thumbnail: string | StaticImageData;
    createdAt?: string;
    updatedAt?: string;
    info?: [{ lesson: number }, { time: string }, { comment: number }];
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

export interface ICourseApiResponse extends IApiResponse {
    metaData: {
        courseList: IMyCourseData[];
    };
}