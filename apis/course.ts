import { ICourseApiResponse, IConfigAuth, IApiResponse } from "@/model";
import axiosClient from "./axiosClient";

const courseApi = {
    getCourseById: async (id: number | string): Promise<ICourseApiResponse> => {
        return axiosClient.get(`/courses/${id}`);
    },
    createCourse: (payload: any, config: IConfigAuth) => {
        const formData = new FormData();
        formData.append("title", payload.title);
        formData.append("author", payload.author);
        formData.append("description", payload.description);
        formData.append("price", payload.price);
        formData.append("level", payload.level);
        formData.append("status", "0001");
        formData.append("thumbnail", payload.thumbnail);

        axiosClient.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            return config;
        });
        return axiosClient.post("/courses", payload, config);
    },
    updateCourse: (payload: FormData, config: IConfigAuth):Promise<IApiResponse > => {
        axiosClient.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            return config;
        });

        return axiosClient.post("/publicvideo", payload, config);
    },
};

export default courseApi;
