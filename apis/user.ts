import { ConfigAuthType } from "@/model";
import axiosClient from "./axiosClient";

export const userServices = {
    profile: async (config: ConfigAuthType) => {
        return axiosClient.get("/profile", config).then((res) => res.data);
    },
};
