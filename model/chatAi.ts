import { IApiResponse } from "./common/apiResponse";

export interface IChatMessage {
    role: string;
    content: string;
}

export interface IChatAiResponse extends IApiResponse {
    metaData: {
        chatResponse: {
            choices: {
                message: IChatMessage;
            }[];
        };
    };
}

export interface IRequestMessage {
    messages: IChatMessage[];
    model: string;
    stream: boolean;
}
