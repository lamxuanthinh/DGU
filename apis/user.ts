import axiosClient from "./axiosClient";

export const user = {
    profile: () => {
        return axiosClient.get("/profile").then((res) => res.data);
    },
};
