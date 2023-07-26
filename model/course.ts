export interface myCourse {
    _id: string;
    title: string;
    link: string;
    themenails: JSX.Element;
    userAvt: JSX.Element;
    nameUser: string;
}

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

export interface ICourseDetails {
    id: number;
    image: JSX.Element;
    title1: string;
    title2: string;
}

export interface IDescriptionCourse {
    title: string;
    description: string;
    cost: string;
    count: string;
    image: any;
}
