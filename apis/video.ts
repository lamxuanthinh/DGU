import axiosClient from "./axiosClient";

const videoApi = {
    getAllVideo: () => {
        return axiosClient.get("/video/").then((res) => res.data);
    },
    getVideoById: (id: number | string) => {
        return axiosClient.get(`/video/${id}`).then((res) => res.data);
    },
};

export default videoApi;
