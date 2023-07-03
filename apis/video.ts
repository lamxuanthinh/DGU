import axiosClient from "./axiosClient";

const videoApi = {
    getAllVideo: () => {
        return axiosClient.get("/api/video/");
    },
    getVideoById: (id: string | number) => {
        return axiosClient.get(`/api/video/${id}`);
    },
};

export default videoApi;
