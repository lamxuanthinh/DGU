import axiosClient from "./axiosClient";

const videoShortApi = {
    getAllVideoShort: () => {
        return axiosClient.get("/shortvideo");
    },

    getAllPublicVideo: () => {
        return axiosClient.get("/publicvideo");
    },

    getVideoById: (id: number | string) => {
        return axiosClient.get(`/publicvideo/${id}`);
    },
};

export default videoShortApi;
