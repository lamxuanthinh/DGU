import axiosClient from "./axiosClient";

const videoApi = {
    getAllVideo: () => {
        return axiosClient.get("/api/video/").then((res) => res.data);
    },
    getVideoById: (id: number | string) => {
        return axiosClient.get(`/api/video/${id}`).then((res) => res.data);
    },
};

export default videoApi;
