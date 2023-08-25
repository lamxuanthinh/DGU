
export interface IUser {
    _id: string;
    name: string;
}

export interface ICourseDetail {
    _id: string;
    thumbnail: string;
    title: string;
    totalVideo: number;
    description: string;
    userId: IUser;
}

export interface ILessonDetail {
    _id: string;
    title: string;
    thumbnail: string;
    createAt: string;
}
