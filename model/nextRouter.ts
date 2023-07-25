import { ParsedUrlQuery } from "querystring";

export interface QueryVerifyEmail extends ParsedUrlQuery {
    email: string;
    token: string;
}

export interface QueryNotification extends ParsedUrlQuery {
    emailSent: any;
}
