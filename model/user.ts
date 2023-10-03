import { IApiResponse } from "@/model";

export interface IProfileUser {
    _id: string;
    email: string;
    name: string;
    birthday: string;
    gender: number;
    avatar: string;
    status: string;
    roles: [];
}

export interface IUserApiResponse extends IApiResponse {
    metaData: {
        profile: IProfileUser;
    };
}

export interface IGenderOption {
    value: number;
    label: string;
}

export interface IOptionDropdown {
    value: string | number;
    label: string | number;
}
