import { IPublicVideoApiResponse, IVideoByIdApiResponse, IVideoShortApiResponse } from "@/model";
import axiosClient from "./axiosClient";

const videoShortApi = {
    getAllVideoShort: (): Promise<IVideoShortApiResponse> => {
        return axiosClient.get("/shortvideo");
    },

    getAllPublicVideo: (): Promise<IPublicVideoApiResponse> => {
        return axiosClient.get("/publicvideo");
    },

    getVideoById: (id: number | string): Promise<IVideoByIdApiResponse> => {
        return axiosClient.get(`/publicvideo/${id}`);
    },
};

export default videoShortApi;
