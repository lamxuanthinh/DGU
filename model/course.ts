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
    _id: number;
    userId: string;
    title: string;
    author: string;
    description: string;
    price: string;
    level: string;
    status: string;
    thumbnail: string;
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
    thumbnail: string;
}

export interface ILessonData {
    description: string;
    image: string;
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
