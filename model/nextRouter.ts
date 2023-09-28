import { ParsedUrlQuery } from "querystring";

export interface IQueryVerifyEmail extends ParsedUrlQuery {
    email: string;
    token: string;
}

export interface IQueryNotification extends ParsedUrlQuery {
    emailSent: string;
}
