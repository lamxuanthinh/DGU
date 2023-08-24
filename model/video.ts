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
