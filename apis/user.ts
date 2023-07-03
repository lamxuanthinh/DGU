import axiosClient from "./axiosClient";

export const user = {
    profile: () => {
        return axiosClient.get("/api/profile");
    },
};
