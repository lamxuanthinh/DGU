import { IConfigAuth, IUserApiResponse } from "@/model";
import axiosClient from "./axiosClient";

export const userServices = {
    profile: async (config: IConfigAuth): Promise<IUserApiResponse> => {
        return axiosClient.get("/profile", config);
    },
};
