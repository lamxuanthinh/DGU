import axiosClient from "./axiosClient";

const profile = {
    getAllMyCourse: (id: number | string) => {
        return axiosClient.get(`/api/courses/${id}`).then((res) => res.data);
    },
    getCourseDetail: (id: string | string[]) => {
        return axiosClient.get(`/api/publicvideo/course/${id}`).then((res) => res.data);
    },
};

export default profile;
