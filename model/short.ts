import { StaticImageData } from "next/image";

export interface IShort {
    id: number;
    title:string;
    srcImage: string | StaticImageData;
    hashtag: string;
    view: number;
}

export type IListShort = IShort[];