import axiosClient from "./axiosClient";

export const upload = {
    uploadFile: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file)

        axiosClient.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            return config;
        });
        
        return await axiosClient.post("/api/v3/files", formData);
    },

    getMd5: async (id: string) => {
        
        return await axiosClient.get("/api/v3/analyses/" + id);
    },

    getResult: async (md5: string) => {
        return await axiosClient.get("/api/v3/files/" + md5);
    },
}