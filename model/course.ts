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
    id: string | number;
    title: string;
    content: string;
    quantity: string | number;
    price: string;
    image: any;
}

export interface ILessonData {
    description: string;
    image: string;
    title: string;
    author: string;
}


