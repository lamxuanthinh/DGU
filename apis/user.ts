import { IConfigAuthType } from "@/model";
import axiosClient from "./axiosClient";

export const userServices = {
    profile: async (config: IConfigAuthType) => {
        return axiosClient.get("/profile", config);
    },
};
