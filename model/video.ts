import { StaticImageData } from "next/image";
import { IApiResponse } from "@/model";

interface IAuthor {
    pathAvatar: string;
}

export interface IVideoPayload {
    _id: string;
    thumbnail: string;
    userId: string;
    videoPublicId: string;
    title: string;
    description: string;
    video: string;
    controlData: {
        point: any;
        duration: any;
    };
    createdAt: string;
    updatedAt: string;
}

//normal video
export interface IShortVideoPayload {
    _id: string;
    thumbnail: string;
    userId: string;
    videoPublicId: string;
    title: string;
    description: string;
    video: string;
    createdAt: string;
    updatedAt: string;
    controlData: {
        point: any;
        duration: any;
    };
    fullVideoInfo: IVideoPayload;
}

export interface IDRMVideoPayload {
    author: IAuthor;
    video_id: string;
    title: string;
    caption: string;
    course_id: number | string;
    sharers: number;
    hashtags: Array<string>;
    comments: Array<string>;
    likers: number | string;
    video_id_children: Array<IDRMVideoShortPayload>;
    parent_id: number | string;
    duration: number;
    break_point: number;
    pathVideo: string;
}

export interface IDRMVideoShortPayload {
    author: IAuthor;
    video_id: string;
    title: string;
    caption: string;
    course_id: number | string;
    sharers: number;
    hashtags: Array<string>;
    comments: Array<string>;
    likers: number | string;
    video_id_children: Array<IDRMVideoShortPayload>;
    parent_id: string;
    duration: number;
    break_point: number;
    pathVideo: string;
    fullVideoInfo: IDRMVideoPayload;
}

export interface VideoDataResponse {
    message: String;
    status: string;
    metaData: {};
}

export interface IVideoData {
    srcImage: StaticImageData;
    title: string;
    author: string;
    view: string;
    timeCreate: string;
}

export interface IVideoShortData {
    _id: string;
    userId: {
        _id: string;
        avatar: string;
    };
    videoPublicId: string;
    title: string;
    description: string;
    thumbnail: string;
    video: string;
    shortTimeLine: Array<string>;
    createdAt: string;
    updatedAt: string;
}

interface IVideoByIdData {
    _id: string;
    userId: {
        _id: string;
        avatar: string;
    };
    course: string;
    title: string;
    description: string;
    thumbnail: string;
    video: string;
    shortTimeLine: Array<string>;
    createdAt: string;
    updatedAt: string;
}

interface IVideoPublicData {
    _id: string;
    userId: {
        _id: string;
        avatar: string;
    };
    course: string;
    title: string;
    description: string;
    thumbnail: string;
    video: string;
    shortTimeLine: string[];
    createdAt: string;
    updatedAt: string;
}

export interface IVideoShortApiResponse extends IApiResponse {
    metaData: {
        shortList: IVideoShortData[];
    };
}

export interface IVideoByIdApiResponse extends IApiResponse {
    metaData: {
        publicVideo: IVideoByIdData;
    };
}

export interface IPublicVideoApiResponse extends IApiResponse {
    metaData: {
        PublicVideoList: IVideoPublicData[];
    };
}
