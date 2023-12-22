import { IChatAiResponse, IRequestMessage } from "@/model";
import axiosClient from "./axiosClient";

export const sendMessage = async (payload: IRequestMessage): Promise<IChatAiResponse> => {
    return axiosClient.post("/suggest-by-description", payload);
};
