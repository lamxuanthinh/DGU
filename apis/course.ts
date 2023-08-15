import { DataResponse, MyCoursePayload } from "@/model/course";
import axiosClient from "./axiosClient";

const courseApi = {
    getCourseById: async (id: number | string) => {
        const dataResponse = await axiosClient.get<DataResponse>(`/api/courses/${id}`).then((res) => res.data)
        
        return dataResponse.metaData.courseList;
    },
    createCourse: (payload: MyCoursePayload) => {
        return axiosClient.post("/api/courses", payload).then((res) => res.data);
    },
};

export default courseApi;
