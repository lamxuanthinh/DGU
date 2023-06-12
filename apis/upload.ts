import axiosUpload from "./axiosUpload";

export const upload = {
    uploadFile: async (formData: FormData) => {

        axiosUpload.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            config.headers["Accept"] = "application/json;";

            return config;
        });
        

        return await axiosUpload.post("/api/v3/files", formData);
    },

    getMd5: async (id: string) => {
        console.log('đang getMd5');
        
        return await axiosUpload.get("/api/v3/analyses/" + id);
    },

    getResult: async (md5: string) => {
        return await axiosUpload.get("/api/v3/files/" + md5);
    },
}