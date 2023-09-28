import { ICourseDetailApiResponse, ICourseListApiResponse } from "@/model";
import axiosClient from "./axiosClient";

const profile = {
    getAllMyCourse: (id: number | string): Promise<ICourseListApiResponse> => {
        return axiosClient.get(`/courses/${id}`);
    },
    getCourseDetail: (id: string | string[]): Promise<ICourseDetailApiResponse> => {
        return axiosClient.get(`/publicvideo/course/${id}`);
    },
};

export default profile;
