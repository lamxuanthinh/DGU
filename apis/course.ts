import { DataResponse } from "@/model/course";
import axiosClient from "./axiosClient";
import { IConfigAuthType } from "@/model";

const courseApi = {
    getCourseById: async (id: number | string) => {
        const dataResponse = await axiosClient.get<DataResponse>(`/courses/${id}`).then((res) => res.data);

        return dataResponse.metaData.courseList;
    },
    createCourse: (payload: any, config: IConfigAuthType) => {
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
        return axiosClient.post("/courses", payload, config).then((res) => res.data);
    },
    updateCourse: (payload: FormData, config: IConfigAuthType) => {
        axiosClient.interceptors.request.use((config) => {
            config.headers["Content-Type"] = "multipart/form-data;";
            return config;
        });

        return axiosClient.post("/publicvideo", payload, config).then((res) => res.data);
    },
};

export default courseApi;
