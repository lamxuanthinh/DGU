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

export interface IDropdownOption {
    value: string | number;
    label: string | number;
}

export interface IGenderOption extends IDropdownOption {
    value: number;
    label: string;
}
