import { IConfigAuth } from "@/model";
import axiosClient from "./axiosClient";

export const userServices = {
    profile: async (config: IConfigAuth) => {
        return axiosClient.get("/profile", config);
    },
};
