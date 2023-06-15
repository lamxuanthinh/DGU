import axios from "axios";
import axiosClient from "./axiosClient";

export const upload = {
    uploadFile: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file)

        axiosClient.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            return config;
        });
        
        // return await axiosClient.post("/api/v3/files", formData);


        // test
        const headers = {
            "x-apikey": '50d5e74f6630f739b2c71da3d34baab3b4e9a1dbf748a9721d60014f3ef2b4ef',
            "Content-Type": "multipart/form-data",
        };
        
        return await axios.post("https://www.virustotal.com/api/v3/files", formData, {headers});
    },

    getMd5: async (id: string) => {
        
        return await axiosClient.get("/api/v3/analyses/" + id);
    },

    getResult: async (md5: string) => {
        return await axiosClient.get("/api/v3/files/" + md5);
    },
}