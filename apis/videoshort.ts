import axiosClient from "./axiosClient";

const videoShortApi = {
    getAllVideoShort: () => {
        return axiosClient.get("/api/shortvideo").then((res) => res.data);
    },
    getVideoById: (id: number | string) => {
        return axiosClient.get(`/api/publicvideo/${id}`).then((res) => res.data);
    },
};

export default videoShortApi;
