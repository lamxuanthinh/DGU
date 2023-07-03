interface IAuthor {
    pathAvatar: string;
}

export interface IVideoPayload {
    author: IAuthor;
    video_id: string;
    title: string;
    caption: string;
    course_id: number | string;
    sharers: number;
    hashtags: Array<string>;
    comments: Array<string>;
    likers: number | string;
    video_id_children: Array<IVideoShortPayload>;
    parent_id: number | string;
    duration: number;
    break_point: number;
    pathVideo: string;
}

export interface IVideoShortPayload {
    author: IAuthor;
    video_id: string;
    title: string;
    caption: string;
    course_id: number | string;
    sharers: number;
    hashtags: Array<string>;
    comments: Array<string>;
    likers: number | string;
    video_id_children: Array<IVideoShortPayload>;
    parent_id: string;
    duration: number;
    break_point: number;
    pathVideo: string;
    fullVideoInfo: IVideoPayload;
}
