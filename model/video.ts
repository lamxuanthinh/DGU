interface IAuthor {
    pathAvatar: string;
}

export interface IVideoPayload {
    message: string;
    status: number;
    metaData: IDataVideo | Array<IDataVideoShort>;
}

export interface IDataVideo {
    author: IAuthor;
    video_id: string;
    title: string;
    caption: string;
    course_id: number | string;
    sharers: number;
    hashtags: Array<string>;
    comments: Array<string>;
    likers: number | string;
    video_id_children: Array<IDataVideoShort>;
    parent_id: number | string;
    duration: number;
    break_point: number;
    pathVideo: string;
}

export interface IDataVideoShort {
    author: IAuthor;
    video_id: string;
    title: string;
    caption: string;
    course_id: number | string;
    sharers: number;
    hashtags: Array<string>;
    comments: Array<string>;
    likers: number | string;
    parent_id: string;
    duration: number;
    break_point: number;
    pathVideo: string;
    fullVideoInfo: IVideoPayload;
}
