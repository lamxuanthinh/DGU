import axiosClient from "./axiosClient";

const videoApi = {
    getAllVideo: () => {
        return axiosClient.get("/video/");
    },
    getVideoById: (id: number | string) => {
        return axiosClient.get(`/video/${id}`);
    }, 
};

export default videoApi;
