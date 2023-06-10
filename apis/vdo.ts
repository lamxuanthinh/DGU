import { dataCloudVdoPayload, uploadVdoPayload } from "@/model/vdo";
import axiosClient from "./axiosClient";

export const vdo = {
    getDataCloud: async (payload: dataCloudVdoPayload) => {
        const API_URL = new URL(`${window.location.origin}/api/videos`);
        API_URL.searchParams.set("title", payload.titleVideo);
        return await axiosClient.put(API_URL.href);
    },

    uploadCloud: async (uploadVdoPayload: uploadVdoPayload) => {
        const formData = new FormData();

        formData.append(
            "x-amz-credential",
            uploadVdoPayload.dataCloud["x-amz-credential"]
        );
        formData.append(
            "x-amz-algorithm",
            uploadVdoPayload.dataCloud["x-amz-algorithm"]
        );
        formData.append("x-amz-date", uploadVdoPayload.dataCloud["x-amz-date"]);
        formData.append(
            "x-amz-signature",
            uploadVdoPayload.dataCloud["x-amz-signature"]
        );
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
