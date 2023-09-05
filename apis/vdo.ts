import { DataCloudVdoPayload, UploadVdoPayload } from "@/model/vdo";
import axiosClient from "./axiosClient";

export const vdo = {
    getDataCloud: async (payload: DataCloudVdoPayload) => {
        return Object.create(await axiosClient.put(`/videos?title=${payload.titleVideo}`));
    },

    uploadCloud: async (uploadVdoPayload: UploadVdoPayload) => {
        const formData = new FormData();

        formData.append("x-amz-credential", uploadVdoPayload.dataCloud["x-amz-credential"]);
        formData.append("x-amz-algorithm", uploadVdoPayload.dataCloud["x-amz-algorithm"]);
        formData.append("x-amz-date", uploadVdoPayload.dataCloud["x-amz-date"]);
        formData.append("x-amz-signature", uploadVdoPayload.dataCloud["x-amz-signature"]);
        formData.append("policy", uploadVdoPayload.dataCloud["policy"]);
        formData.append("key", uploadVdoPayload.dataCloud["key"]);
        formData.append("success_action_status", "201");
        formData.append("success_action_redirect", "");
        formData.append("file", uploadVdoPayload.file);

        axiosClient.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            return config;
        });

        const API_URL = new URL(uploadVdoPayload.dataCloud.uploadLink);
        return await axiosClient.post(API_URL.href, formData);
    },
};
