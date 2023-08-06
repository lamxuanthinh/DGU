import { number } from "yup"


export interface user {
    name: string,
    avt: string,
} 


export interface notification {
    type: string,
    link: string,
    user: user,

    comment: object|null,

    course: object|null,
    time: string,
}
