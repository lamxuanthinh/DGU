import axiosClient from "./axiosClient";

const videoShortApi = {
    getAllVideoShort: () => {
        return axiosClient.get("/shortvideo").then((res) => res.data);
    },

    getAllPublicVideo: () => {
        return axiosClient.get("/publicvideo").then((res) => res.data);
    },

    getVideoById: (id: number | string) => {
        return axiosClient.get(`/publicvideo/${id}`).then((res) => res.data);
    },
};

export default videoShortApi;
